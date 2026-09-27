import { expect, test } from "@playwright/test";
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

    await page.evaluate(() => (window as any).mountExternalLog());
    await page.waitForFunction(() => (window as any).logRef.current);
});

const logLines = Array.from({ length: 10 }, (_, i) => `error line ${i + 1}`);

test.describe("clear()", () => {
    // https://github.com/melloware/react-logviewer/issues/120
    test("resets search results when the log is replaced", async ({ page }) => {
        const input = page.locator(".react-lazylog-searchbar-input");
        const matches = page.locator(".react-lazylog-searchbar-matches");

        await page.evaluate(
            (lines) => (window as any).logRef.current.appendLines(lines),
            logLines
        );
        await input.fill("error");
        await expect(matches).toHaveText(/(^| of )10 matches$/);

        // Replace the content the way the issue describes
        await page.evaluate((lines) => {
            const log = (window as any).logRef.current;
            log.clear();
            log.appendLines(lines);
        }, logLines);

        await expect(input).toHaveValue("");
        await expect(matches).toHaveText("0 matches");

        // Searching again must only count the new content
        await input.fill("error");
        await expect(matches).toHaveText(/(^| of )10 matches$/);
    });
});
