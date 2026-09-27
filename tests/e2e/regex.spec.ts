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

const text = [
    "INFO starting up",
    "ERROR disk full",
    "héllo wörld ünïcode",
    "WARN low memory",
    "INFO request id=123 took 45ms",
    "ERROR retry ERROR again",
].join("\n");

const mount = async (page: Page, props: Record<string, unknown> = {}) => {
    await page.evaluate(
        ({ text, props }) =>
            (window as any).mountExternalLog({
                external: false,
                text,
                enableLineNumbers: true,
                ...props,
            }),
        { text, props }
    );
    await page.waitForFunction(() => (window as any).logRef.current);
};

const input = (page: Page) => page.locator(".react-lazylog-searchbar-input");
const matches = (page: Page) =>
    page.locator(".react-lazylog-searchbar-matches");
const regexButton = (page: Page) =>
    page.locator(".react-lazylog-searchbar-regex");

const toggleFilter = (page: Page) =>
    page.locator(".react-lazylog-searchbar-filter").dispatchEvent("mouseup");

// Line numbers are rendered via CSS from the anchor id
const lineNumbers = (page: Page) =>
    page
        .locator(".react-lazylog .log-line .log-number")
        .evaluateAll((els) => els.map((el) => el.id));

// https://github.com/melloware/react-logviewer/issues/39
test.describe("regex search", () => {
    test("plain text search is the default and has no toggle", async ({
        page,
    }) => {
        await mount(page);
        await expect(regexButton(page)).toHaveCount(0);

        await input(page).fill("ERROR|WARN");
        await expect(matches(page)).toHaveText("0 matches");
    });

    test("searchRegex matches patterns, per match and on the right lines", async ({
        page,
    }) => {
        await mount(page, { searchRegex: true });

        await input(page).fill("ERROR|WARN");
        await expect(matches(page)).toHaveText("1 of 4 matches");

        // Non-ASCII text before the matches must not shift line numbers
        await toggleFilter(page);
        await expect.poll(() => lineNumbers(page)).toEqual(["2", "4", "6"]);
        await expect(
            page.locator(".react-lazylog [class*='searchMatch']")
        ).toHaveText(["ERROR", "WARN", "ERROR", "ERROR"]);
    });

    test("regex highlighting marks the whole match", async ({ page }) => {
        await mount(page, { searchRegex: true });

        await input(page).fill("\\d+ms");
        await expect(matches(page)).toHaveText("1 of 1 match");
        await expect(
            page.locator(".react-lazylog [class*='searchMatch']")
        ).toHaveText(["45ms"]);
    });

    test("respects caseInsensitive", async ({ page }) => {
        await mount(page, { searchRegex: true, caseInsensitive: true });

        await input(page).fill("error|warn");
        await expect(matches(page)).toHaveText("1 of 4 matches");
    });

    test("invalid and empty-matching patterns match nothing", async ({
        page,
    }) => {
        await mount(page, { searchRegex: true });

        await input(page).fill("ERROR(");
        await expect(matches(page)).toHaveText("0 matches");

        await input(page).fill("^.{0}");
        await expect(matches(page)).toHaveText("0 matches");
    });

    test("toggle button switches modes and re-runs the search", async ({
        page,
    }) => {
        await mount(page, { enableRegexToggle: true });
        await expect(regexButton(page)).toHaveAttribute("aria-pressed", "false");

        await input(page).fill("ERROR|WARN");
        await expect(matches(page)).toHaveText("0 matches");

        await regexButton(page).click();
        await expect(regexButton(page)).toHaveAttribute("aria-pressed", "true");
        await expect(matches(page)).toHaveText("1 of 4 matches");

        await regexButton(page).click();
        await expect(matches(page)).toHaveText("0 matches");
    });

    test("searchRegex prop changes re-run the search", async ({ page }) => {
        await mount(page, { enableRegexToggle: true });
        await input(page).fill("ERROR|WARN");
        await expect(matches(page)).toHaveText("0 matches");

        await page.evaluate(() =>
            (window as any).rerenderLog({ searchRegex: true })
        );
        await expect(regexButton(page)).toHaveAttribute("aria-pressed", "true");
        await expect(matches(page)).toHaveText("1 of 4 matches");
    });
});

test.describe("search navigation highlight", () => {
    for (const searchRegex of [false, true]) {
        test(`highlights the selected match within a line (regex: ${searchRegex})`, async ({
            page,
        }) => {
            await mount(page, { searchRegex });
            const selected = page.locator(
                ".react-lazylog [class*='searchMatchHighlighted']"
            );
            // Index of the selected match among all matches on its line
            const selectedIndex = () =>
                selected.evaluate((el) =>
                    [
                        ...el.parentElement!.querySelectorAll(
                            "[class*='searchMatch']"
                        ),
                    ].indexOf(el)
                );

            // Line 6 starts with the match and contains it twice
            await input(page).fill("ERROR");
            const next = page.locator(".react-lazylog-searchbar-down-arrow");
            await next.click(); // line 2
            await next.click(); // line 6, first ERROR
            await expect(matches(page)).toHaveText("2 of 3 matches");
            await expect.poll(selectedIndex).toBe(0);

            await next.click(); // line 6, second ERROR
            await expect(matches(page)).toHaveText("3 of 3 matches");
            await expect.poll(selectedIndex).toBe(1);
        });
    }
});
