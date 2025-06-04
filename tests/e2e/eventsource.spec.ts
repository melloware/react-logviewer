import { expect, test } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

const testPort = "54321";

test.beforeEach(async ({ page }) => {
    // Build the library and inject it into test page
    await page.goto(`file://${path.join(__dirname, "test-app.html")}`);

    // Inject the test port
    await page.evaluate((port) => {
        (window as any).TEST_PORT = port;
    }, testPort);

    // Inject the built LazyLog (we'll use the UMD build from dist)
    const lazyLogPath = path.join(__dirname, "../../dist/umd/index.js");
    if (fs.existsSync(lazyLogPath)) {
        const lazyLogCode = fs.readFileSync(lazyLogPath, "utf8");
        await page.evaluate((code) => {
            const script = document.createElement("script");
            script.textContent = code;
            document.head.appendChild(script);
        }, lazyLogCode);
    } else {
        // If no UMD build, we need to build first or use the dev server
        throw new Error("LazyLog build not found. Run npm run build first.");
    }
});

test.describe("EventSource Integration Tests", () => {
    test("respects reconnect: false option", async ({ page }) => {
        // Mount with reconnect: false
        await page.evaluate(() => {
            (window as any).mountLog('/sse/basic', { reconnect: false });
        });
        await page.waitForTimeout(500);

        // Check initial connection
        const initialResponse = await page.request.get(
            `http://localhost:${testPort}/test/connections`
        );
        const initialData = await initialResponse.json();
        expect(initialData.activeConnections).toBe(1);

        // Force server to close connection by navigating away and back
        await page.goto("about:blank");
        await page.waitForTimeout(1000);
        await page.goto(`file://${path.join(__dirname, "test-app.html")}`);

        // Check that connection is closed and not reconnecting
        const finalResponse = await page.request.get(
            `http://localhost:${testPort}/test/connections`
        );
        const finalData = await finalResponse.json();
        expect(finalData.activeConnections).toBe(0);
    });

    test("handles EventSource errors and reconnection", async ({ page }) => {
        // This test uses the flaky endpoint that drops connection after a few messages
        // to verify that EventSource reconnects automatically

        await page.evaluate(() => {
            (window as any).openCount = 0;
            (window as any).errorCount = 0;
            (window as any).messages = [];

            // Use flaky endpoint that drops connection after 5 messages
            (window as any).mountLog(`/sse/flaky?errorAfter=5`, {
                onOpen: () => {
                    (window as any).openCount++;
                    console.log(
                        "Connection opened, count:",
                        (window as any).openCount
                    );
                },
                onError: (e: Event) => {
                    (window as any).errorCount++;
                    console.log(
                        "Connection error, count:",
                        (window as any).errorCount
                    );
                },
            });
        });

        // Wait for initial connection
        await page.waitForTimeout(800); // Should receive 5 messages then error

        // Check initial state
        const openCount1 = await page.evaluate(() => (window as any).openCount);
        const errorCount1 = await page.evaluate(
            () => (window as any).errorCount
        );

        expect(openCount1).toBe(1);
        expect(errorCount1).toBeGreaterThanOrEqual(1); // Should have errored when connection dropped

        // EventSource should automatically reconnect after ~3 seconds
        await page.waitForTimeout(4000);

        // Check if reconnected
        const openCount2 = await page.evaluate(() => (window as any).openCount);
        expect(openCount2).toBeGreaterThan(1); // Should have reconnected at least once

        // Verify we continue to receive messages after reconnection
        const content = await page.textContent("#root");
        expect(content).not.toBeNull();

        if (content) {
            const lines = content.split("\n").filter((line) => line.trim());
            expect(lines.length).toBeGreaterThan(5); // Should have more than the initial 5 messages
        }
    });

    test("properly cleans up connections on unmount", async ({ page }) => {
        // Check initial state
        const initial = await page.request.get(
            `http://localhost:${testPort}/test/connections`
        );
        const initialData = (await initial.json()) as {
            activeConnections: number;
        };
        expect(initialData.activeConnections).toBe(0);

        // Mount component
        await page.evaluate(() => {
            (window as any).mountLog('/sse/basic');
        });
        await page.waitForTimeout(500);

        // Verify connection is active
        const active = await page.request.get(
            `http://localhost:${testPort}/test/connections`
        );
        const activeData = (await active.json()) as {
            activeConnections: number;
        };
        expect(activeData.activeConnections).toBe(1);

        // Unmount component
        await page.evaluate(() => {
            (window as any).unmountLog();
        });
        await page.waitForTimeout(500);

        // Verify connection is closed
        const closed = await page.request.get(
            `http://localhost:${testPort}/test/connections`
        );
        const closedData = (await closed.json()) as {
            activeConnections: number;
        };
        expect(closedData.activeConnections).toBe(0);
    });

    test("automatically reconnects when reconnect: true (default)", async ({
        page,
    }) => {
        // Track connection events
        await page.evaluate(() => {
            (window as any).connectionCount = 0;
        });

        // Mount flaky connection that will error after 3 messages
        await page.evaluate(() => {
            (window as any).mountLog("/sse/flaky?errorAfter=3", {
                onOpen: () => {
                    (window as any).connectionCount++;
                    console.log(
                        "Connection opened, count:",
                        (window as any).connectionCount
                    );
                },
            });
        });

        // Wait for initial connection
        await page.waitForTimeout(500);
        expect(await page.evaluate(() => (window as any).connectionCount)).toBe(
            1
        );

        // Wait for error and reconnection (EventSource reconnects after ~3s)
        await page.waitForTimeout(4000);

        // Should have reconnected at least once
        const finalCount = await page.evaluate(
            () => (window as any).connectionCount
        );
        expect(finalCount).toBeGreaterThan(1);
    });

    test("no zombie connections after multiple mount/unmount cycles", async ({
        page,
    }) => {
        // Perform multiple mount/unmount cycles
        for (let i = 0; i < 5; i++) {
            await page.evaluate(() => {
                (window as any).mountLog('/sse/basic');
            });
            await page.waitForTimeout(200);
            await page.evaluate(() => {
                (window as any).unmountLog();
            });
            await page.waitForTimeout(200);
        }

        // Final check - should have no active connections
        const final = await page.request.get(
            `http://localhost:${testPort}/test/connections`
        );
        const finalData = (await final.json()) as { activeConnections: number };
        expect(finalData.activeConnections).toBe(0);
    });

    test("handles server-side connection close", async ({ page }) => {
        // This test verifies that EventSource properly handles server-side close
        // Note: EventSource spec says 'close' event only fires when:
        // 1. The connection is closed by calling close()
        // 2. The server sends a 204 No Content (but this is hard to test after 200 OK)
        // In practice, server-side close usually triggers 'error' event and reconnection

        await page.evaluate(() => {
            (window as any).closeEventFired = false;
            (window as any).errorEventFired = false;
            (window as any).messagesReceived = 0;
            (window as any).openCount = 0;

            // Mount with endpoint that will close after 3 messages
            (window as any).mountLog(`/sse/with-close?messages=3`, {
                onOpen: () => {
                    (window as any).openCount++;
                    console.log(
                        "Open event fired, count:",
                        (window as any).openCount
                    );
                },
                onClose: (e: Event) => {
                    (window as any).closeEventFired = true;
                    console.log("Close event fired");
                },
                onError: (e: Event) => {
                    (window as any).errorEventFired = true;
                    console.log("Error event fired");
                },
                formatMessage: (msg: string) => {
                    (window as any).messagesReceived++;
                    return msg;
                },
            });
        });

        // Wait for messages and server close
        await page.waitForTimeout(800); // Should receive 3 messages then server closes

        // Check that we received exactly 3 messages
        const messagesReceived = await page.evaluate(
            () => (window as any).messagesReceived
        );
        expect(messagesReceived).toBe(3);

        // Server-side close typically triggers error event (not close event)
        const errorEventFired = await page.evaluate(
            () => (window as any).errorEventFired
        );
        expect(errorEventFired).toBe(true);

        // EventSource should attempt to reconnect after ~3 seconds
        await page.waitForTimeout(4000);

        // Check if it reconnected (default behavior)
        const openCount = await page.evaluate(() => (window as any).openCount);
        expect(openCount).toBeGreaterThan(1); // Should have reconnected

        // Verify content shows the 3 messages from first connection
        const content = await page.textContent("#root");
        expect(content).toContain("Message 1 before close");
        expect(content).toContain("Message 2 before close");
        expect(content).toContain("Message 3 before close");
    });

    test("server close with reconnect: false prevents reconnection", async ({
        page,
    }) => {
        // This test verifies that reconnect: false prevents reconnection even on server close

        await page.evaluate(() => {
            (window as any).errorCount = 0;
            (window as any).openCount = 0;

            // Mount with reconnect: false
            (window as any).mountLog(`/sse/with-close?messages=3`, {
                reconnect: false,
                onOpen: () => {
                    (window as any).openCount++;
                    console.log(
                        "Open event fired, count:",
                        (window as any).openCount
                    );
                },
                onError: (e: Event) => {
                    (window as any).errorCount++;
                    console.log(
                        "Error event fired, count:",
                        (window as any).errorCount
                    );
                },
            });
        });

        // Wait for messages and server close
        await page.waitForTimeout(800);

        // Should have opened once and errored once
        const openCount1 = await page.evaluate(() => (window as any).openCount);
        const errorCount1 = await page.evaluate(
            () => (window as any).errorCount
        );
        expect(openCount1).toBe(1);
        expect(errorCount1).toBe(1);

        // Wait to ensure no reconnection
        await page.waitForTimeout(4000);

        // Should still have only one open (no reconnection)
        const openCount2 = await page.evaluate(() => (window as any).openCount);
        expect(openCount2).toBe(1);

        // Verify connection is closed
        const connections = await page.request.get(
            `http://localhost:${testPort}/test/connections`
        );
        const data = (await connections.json()) as {
            activeConnections: number;
        };
        expect(data.activeConnections).toBe(0);
    });

    test("204 No Content prevents reconnection even with reconnect: true", async ({
        page,
    }) => {
        // This test verifies that 204 No Content response closes EventSource without reconnection
        // This is per the EventSource spec: 204 means "close permanently"

        await page.evaluate(() => {
            (window as any).openCount = 0;
            (window as any).closeCount = 0;
            (window as any).errorCount = 0;

            // Mount with reconnect: true (default) but server will send 204
            (window as any).mountLog(`/sse/204`, {
                onOpen: () => {
                    (window as any).openCount++;
                    console.log(
                        "204 test: open event, count:",
                        (window as any).openCount
                    );
                },
                onClose: (e: Event) => {
                    (window as any).closeCount++;
                    console.log(
                        "204 test: close event, count:",
                        (window as any).closeCount
                    );
                },
                onError: (e: Event) => {
                    (window as any).errorCount++;
                    console.log(
                        "204 test: error event, count:",
                        (window as any).errorCount
                    );
                },
            });
        });

        // Wait for 204 response
        await page.waitForTimeout(1000);

        // Should have attempted to open
        const openCount1 = await page.evaluate(() => (window as any).openCount);
        expect(openCount1).toBe(0); // 204 prevents even the open event

        // Should have fired close or error event
        const closeCount = await page.evaluate(
            () => (window as any).closeCount
        );
        const errorCount = await page.evaluate(
            () => (window as any).errorCount
        );

        console.log(
            "204 test: close count:",
            closeCount,
            "error count:",
            errorCount
        );

        // Different browsers may handle 204 differently - some fire close, some fire error
        // But at least one should fire
        expect(closeCount + errorCount).toBeGreaterThan(0);

        // Wait to ensure NO reconnection (even though reconnect: true by default)
        await page.waitForTimeout(4000);

        // Should NOT have reconnected
        const openCount2 = await page.evaluate(() => (window as any).openCount);
        expect(openCount2).toBe(0); // Still no successful connections

        // Verify no active connections
        const connections = await page.request.get(
            `http://localhost:${testPort}/test/connections`
        );
        const data = (await connections.json()) as {
            activeConnections: number;
        };
        expect(data.activeConnections).toBe(0);
    });
});
