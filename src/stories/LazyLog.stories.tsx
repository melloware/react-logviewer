import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LazyLog } from "../components";

const meta: Meta<typeof LazyLog> = {
    component: LazyLog,
    render: (args) => <LazyLog {...args} />,
};

export default meta;
type Story = StoryObj<typeof LazyLog>;

const BaseStory = {
    caseInsensitive: true,
    regexSearch: false,
    enableGutters: false,
    enableHotKeys: true,
    enableLineNumbers: true,
    enableLinks: false,
    enableMultilineHighlight: true,
    enableSearch: true,
    enableSearchNavigation: true,
    extraLines: 1,
    height: "520",
    loadingComponent: undefined,
    onError: undefined,
    onHighlight: undefined,
    onLineNumberClick: undefined,
    onLoad: undefined,
    selectableLines: true,
    width: "auto",
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const TextLog: Story = {
    name: "Text Based",
    args: {
        ...BaseStory,
        text: `\x1b[4;1mRunning "clean:all" (clean) task\x1b[0m\n\x1b[32m>> \x1b[39m0 paths cleaned.\n\n\x1b[4;1mRunning "copy:base" (copy) task\x1b[0m\nCreated 188 directories, copied 1433 files\n\n\x1b[4;1mRunning "copy:app" (copy) task\x1b[0m\nCreated 40 directories, copied 233 files\n\n\x1b[4;1mRunning "processhtml:dist" (processhtml) task\x1b[0m\n\n\x1b[4;1mRunning "ngAnnotate:dist" (ngAnnotate) task\x1b[0m\n\x1b[32m>> \x1b[39m52 files successfully generated.\n\n\x1b[4;1mRunning "uglify:dist" (uglify) task\x1b[0m\n\x1b[32m>> \x1b[39m2 sourcemaps created.\n\x1b[32m>> \x1b[39m2 files created.\n\n\x1b[4;1mRunning "less:app" (less) task\x1b[0m\n\x1b[32mFile target/dist/css/alertEvents.css created\x1b[39m\n\x1b[32mFile target/dist/css/application.css created\x1b[39m\n\n\x1b[4;1mRunning "less:libs" (less) task\x1b[0m\n\x1b[31mCreate file target/dist/css/libs.css failed\x1b[39m`,
    },
};

export const URLLog: Story = {
    name: "URL Based",
    args: {
        ...BaseStory,
        url: "https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log",
    },
};

export const ClearMethod: Story = {
    args: {
        ...BaseStory,
        height: 100,
        text: `Press the Clear button to test clearing the log!`,
    },
    render: (args) => {
        const ref = React.createRef<LazyLog>();
        return (
            <>
                <button
                    onClick={() => ref.current?.clear()}
                    style={{ marginBottom: "6px" }}
                >
                    Clear Log
                </button>
                <br></br>
                <LazyLog ref={ref} {...args} />
            </>
        );
    },
};

export const ClickEvents: Story = {
    args: {
        ...BaseStory,
        height: 150,
        text: `Click me 100!\nClick me 200!\nClick me 300!\n`,
    },
    render: (args) => (
        <LazyLog
            {...args}
            onLineNumberClick={(e) =>
                alert(`Line No: ${e.lineNumber} - ${e.highlightRange}`)
            }
            onLineContentClick={(e) =>
                alert(`Line Content: ${e.currentTarget.textContent}`)
            }
        />
    ),
};

export const HtmlLinks: Story = {
    args: {
        ...BaseStory,
        height: 200,
        enableLinks: true,
        text: `Can be secure https://www.mozilla.org or unsecure http://www.mozilla.org
We want to upload data to ftp://www.mozilla.org or ftps://www.mozilla.org
We just need to write documents for www.mozilla.org
And at the end send a mail to react-lazylog@mozilla.org
`,
    },
};
