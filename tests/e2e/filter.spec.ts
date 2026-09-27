import { Page, expect, test } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

test.beforeEach(async ({ page }) => {
    await page.goto(`file://${path.join(__dirname, "test-app.html")}`);

    const lazyLogPath = path.join(__dirname, "../../dist/umd/index.js");
    if (!fs.existsSync(lazyLogPath)) {
        throw new Error("LazyLog build not found. Run npm run build first.");
    }
    const lazyLogCode = fs.readFileSync(lazyLogPath, "utf8");
    await page.evaluate((code) => {
        const script = document.createElement("script");
        script.textContent = code;
        document.head.appendChild(script);
    }, lazyLogCode);
});

const appendLine = (page: Page, line: string) =>
    page.evaluate(
        (l) => (window as any).logRef.current.appendLines([l]),
        line
    );

// https://github.com/melloware/react-logviewer/issues/108
for (const external of [false, true]) {
    test(`filter lines includes appended lines (external: ${external})`, async ({
        page,
    }) => {
        await page.evaluate(
            (ext) =>
                (window as any).mountExternalLog({
                    external: ext,
                    text: "",
                    enableSearchNavigation: true,
                }),
            external
        );
        await page.waitForFunction(() => (window as any).logRef.current);

        const input = page.locator(".react-lazylog-searchbar-input");
        const matches = page.locator(".react-lazylog-searchbar-matches");
        const rows = page.locator(".react-lazylog .log-line");

        for (let i = 40; i < 44; i++) {
            await appendLine(page, `[10:00:${i}] Log entry #${i}`);
        }
        await input.fill("42]");
        await expect(matches).toHaveText("1 of 1 match");

        await page
            .locator(".react-lazylog-searchbar-filter")
            .dispatchEvent("mouseup");
        await expect(rows).toHaveText(["[10:00:42] Log entry #42"]);

        // Lines appended while searching are included in results and filter
        await appendLine(page, "[10:01:42] Log entry #99");
        await expect(matches).toHaveText("1 of 2 matches");
        await expect(rows).toHaveText([
            "[10:00:42] Log entry #42",
            "[10:01:42] Log entry #99",
        ]);

        // Search navigation reaches the appended line
        const next = page.locator(".react-lazylog-searchbar-down-arrow");
        await next.click();
        await expect(matches).toHaveText("1 of 2 matches");
        await next.click();
        await expect(matches).toHaveText("2 of 2 matches");

        // A search with no matches must not keep showing stale lines
        await input.fill("zzz");
        await expect(matches).toHaveText("0 matches");
        await expect(rows).toHaveCount(0);
    });
}
