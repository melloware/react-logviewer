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

    await page.evaluate(() => {
        const w = window as any;
        w.highlightEvents = [];
        w.mountExternalLog({
            external: false,
            enableSearch: false,
            enableLineNumbers: true,
            text: Array.from({ length: 10 }, (_, i) => `line ${i + 1}`).join(
                "\n"
            ),
            highlight: 2,
            onHighlight: (range: any) =>
                w.highlightEvents.push(range.toArray()),
        });
    });
});

const rerender = (page: Page, props: Record<string, unknown>) =>
    page.evaluate((p) => (window as any).rerenderLog(p), props);

// Line numbers are rendered via CSS from the anchor id
const highlightedLines = (page: Page) =>
    page
        .locator(".react-lazylog .log-line.log-highlight .log-number")
        .evaluateAll((els) => els.map((el) => el.id));

const highlightEvents = (page: Page) =>
    page.evaluate(() => (window as any).highlightEvents);

// https://github.com/melloware/react-logviewer/issues/43
test.describe("highlight prop", () => {
    test("updates the highlight when the prop changes", async ({ page }) => {
        await expect.poll(() => highlightedLines(page)).toEqual(["2"]);

        await rerender(page, { highlight: 5 });
        await expect.poll(() => highlightedLines(page)).toEqual(["5"]);

        await rerender(page, { highlight: [7, 9] });
        await expect.poll(() => highlightedLines(page)).toEqual(["7", "8", "9"]);

        await rerender(page, { highlight: undefined });
        await expect.poll(() => highlightedLines(page)).toEqual([]);

        expect(await highlightEvents(page)).toEqual([[5], [7, 8, 9], []]);
    });

    test("keeps a clicked highlight when the prop value is unchanged", async ({
        page,
    }) => {
        await rerender(page, { highlight: [3, 4] });
        await expect.poll(() => highlightedLines(page)).toEqual(["3", "4"]);

        await page.locator(".react-lazylog .log-number").nth(5).click();
        await expect.poll(() => highlightedLines(page)).toEqual(["6"]);

        // A new array with the same value must not reset the user's selection
        await rerender(page, { highlight: [3, 4] });
        await expect.poll(() => highlightedLines(page)).toEqual(["6"]);

        expect(await highlightEvents(page)).toEqual([[3, 4], [6]]);
    });
});
