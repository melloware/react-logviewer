import { List, Range } from "immutable";
import React, { CSSProperties, Component, Fragment, ReactNode } from "react";
import { VList, VListHandle } from "virtua";
import Line from "../Line";
import { Loading } from "../Loading";
import SearchBar from "../SearchBar";
import ansiparse from "../Utils/ansiparse";
import { decode, encode } from "../Utils/encoding";
import eventsource from "../Utils/eventsource";
import request from "../Utils/request";
import { searchLines } from "../Utils/search";
import stream from "../Utils/stream";
import {
    SEARCH_BAR_HEIGHT,
    bufferConcat,
    convertBufferToLines,
    getHighlightRange,
    getScrollIndex,
    parseLinks,
    searchFormatPart,
} from "../Utils/utils";
import websocket from "../Utils/websocket";
import styles from "./index.module.css";

export interface WebsocketOptions {
    /**
     * Callback when the socket is opened
     */
    onOpen?: ((e: Event, socket: WebSocket) => void) | undefined;
    /**
     * Callback when the socket is closed
     */
    onClose?: ((e: CloseEvent) => void) | undefined;
    /**
     * Callback when the socket has an error
     */
    onError?: ((e: Event) => void) | undefined;
    /**
     * Callback which formats the websocket data stream.
     */
    formatMessage?: ((message: any) => string) | undefined;
    /**
     * Set to true, to reconnect the WebSocket automatically.
     */
    reconnect?: boolean;
    /**
     * Set the time to wait between reconnects in seconds.
     * Default is 1s
     */
    reconnectWait?: number;
    /**
     * List of protocols to be passed to the WebSocket constructor as the second argument.
     */
    protocols?: string | string[] | undefined;
}

export interface EventSourceOptions {
    /**
     * Boolean indicating if CORS should be set to include credentials
     */
    withCredentials?: boolean;
    /**
     * Callback when the eventsource is opened
     */
    onOpen?: ((e: Event, eventSource: EventSource) => void) | undefined;
    /**
     * Callback when the eventsource is closed
     */
    onClose?: ((e: Event) => void) | undefined;
    /**
     * Callback when the eventsource has an error
     */
    onError?: ((e: Event) => void) | undefined;
    /**
     * Callback which formats the eventsource data stream.
     */
    formatMessage?: ((message: any) => string) | undefined;
    /**
     * Set to true, to reconnect the EventSource automatically.
     */
    reconnect?: boolean;
    /**
     * Set the time to wait between reconnects in seconds.
     * Default is 1s
     */
    reconnectWait?: number;
}

export interface ErrorStatus extends Error {
    /**
     * Status code
     */
    status?: number;
}

export interface LineNumberClickEvent {
    lineNumber: number;
    highlightRange?: Immutable.Seq.Indexed<number>;
}

/**
 * React component that loads and views remote text in the browser lazily and efficiently.
 */
export interface LazyLogProps {
    /**
     * Flag to enable/disable case insensitive search
     */
    caseInsensitive?: boolean;
    /**
     * Optional custom inline style to attach to element which contains
     * the interior scrolling container.
     */
    containerStyle?: CSSProperties;
    /**
     * If true, capture system hotkeys for searching the page (Cmd-F, Ctrl-F,
     * etc.)
     */
    enableHotKeys?: boolean;
    /**
     * Enable the line gutters to be displayed. Default is false
     */
    enableGutters?: boolean;
    /**
     * Enable the line numbers to be displayed. Default is true.
     */
    enableLineNumbers?: boolean;
    /**
     * Enable hyperlinks to be discovered in log text and made clickable links. Default is false.
     */
    enableLinks?: boolean;
    /**
     * Enable the search feature.
     */
    enableSearch?: boolean;
    /**
     * If true, search like a browser search - enter jumps to the next line
     * with the searched term, shift + enter goes backwards.
     * Also adds up and down arrows to search bar to jump
     * to the next and previous result.
     * If false, enter toggles the filter instead.
     * Defaults to true.
     */
    enableSearchNavigation?: boolean;
    /**
     * Enable the ability to select multiple lines using shift + click.
     * Defaults to true.
     */
    enableMultilineHighlight?: boolean;
    /**
     * Number of extra lines to show at the bottom of the log.
     * Set this to 1 so that Linux users can see the last line
     * of the log output.
     */
    extraLines?: number;
    /**
     * Options object which will be passed through to the `fetch` request.
     * Defaults to `{ credentials: 'omit' }`.
     */
    fetchOptions?: RequestInit;
    /**
     * Scroll to the end of the component after each update to the content.
     * Cannot be used in combination with `scrollToLine`.
     */
    follow?: boolean;
    /**
     * Execute a function against each string part of a line,
     * returning a new line part. Is passed a single argument which is
     * the string part to manipulate, should return a new string
     * with the manipulation completed.
     */
    formatPart?: (text: string) => ReactNode;
    /**
     * The Line Gutter component
     */
    gutter?: React.ReactNode[];
    /**
     * Set the height in pixels for the component.
     * Defaults to `'auto'` if unspecified. When the `height` is `'auto'`,
     * the component will expand vertically to fill its container.
     */
    height?: string | number;
    /**
     * Line number (e.g. `highlight={10}`) or line number range to highlight
     * inclusively (e.g. `highlight={[5, 10]}` highlights lines 5-10).
     * This is 1-indexed, i.e. line numbers start at `1`.
     */
    highlight?: number | number[];
    /**
     * Specify an additional className to append to highlighted lines.
     */
    highlightLineClassName?: string;
    /**
     * Icon for the Filter Lines button in the Search Bar. Defaults to FilterLineIcon SVG.
     */
    iconFilterLines?: React.ReactNode;
    /**
     * Icon for the Find Next button in the Search Bar. Defaults to ArrowDownIcon SVG.
     */
    iconFindNext?: React.ReactNode;
    /**
     * Icon for the Find Previous button in the Search Bar. Defaults to ArrowUpIcon SVG.
     */
    iconFindPrevious?: React.ReactNode;
    /**
     * Specify an additional className to append to lines.
     */
    lineClassName?: string;
    /**
     * Manually display the loading component
     */
    loading?: boolean;
    /**
     * Specify an alternate component to use when loading.
     */
    loadingComponent?: React.ReactNode;
    /**
     * Execute a function if the provided `url` has encountered an error
     * during loading.
     */
    onError?: (error: any) => any;
    /**
     * Execute a function when the highlighted range has changed.
     * Is passed a single argument which is an `Immutable.Range`
     * of the highlighted line numbers.
     */
    onHighlight?: (range: Immutable.Seq.Indexed<number>) => any;
    /**
     * Execute a function if/when the provided `url` has completed loading.
     */
    onLoad?: () => any;
    /**
     * Additional function called when a line number is clicked.
     * On click, the line will always be highlighted.
     * This function is to provide additional actions.
     * Receives an object with lineNumber and highlightRange.
     * Defaults to null.
     */
    onLineNumberClick?: (event: LineNumberClickEvent) => any;
    /**
     * Callback to invoke on click of line contents.
     * @param {React.MouseEvent<HTMLElement>} event - Browser event.
     */
    onLineContentClick?(event: React.MouseEvent<HTMLSpanElement>): void;

    /**
     * Callback to invoke on user scroll. Args matches the ScrollFollow onScroll callback.
     * @param args
     */
    onScroll?(args: {
        scrollTop: number;
        scrollHeight: number;
        clientHeight: number;
    }): void;

    /**
     * Number of rows to render above/below the visible bounds of the list.
     * This can help reduce flickering during scrolling on
     * certain browsers/devices. Defaults to `100`.
     */
    overscanRowCount?: number;
    /**
     * A fixed row height in pixels. Controls how tall a line is,
     * as well as the `lineHeight` style of the line's text.
     * Defaults to `19`.
     */
    rowHeight?: number;
    /**
     * Scroll to a particular line number once it has loaded.
     * This is 1-indexed, i.e. line numbers start at `1`.
     * Cannot be used in combination with `follow`.
     */
    scrollToLine?: number;
    /**
     * Minimum number of characters to trigger a search. Defaults to 2.
     */
    searchMinCharacters?: number;
    /**
     * Make the text selectable, allowing to copy & paste. Defaults to `false`.
     */
    selectableLines?: boolean;
    /**
     * Set to `true` to specify remote URL will be streaming chunked data.
     * Defaults to `false` to download data until completion.
     */
    stream?: boolean;
    /**
     * Optional custom inline style to attach to root
     * virtual `LazyList` element.
     */
    style?: CSSProperties;
    /**
     * String containing text to display.
     */
    text?: string;
    /**
     * The URL from which to fetch content. Subject to same-origin policy,
     * so must be accessible via fetch on same domain or via CORS.
     */
    url?: string;
    /**
     * Set to `true` to specify that url is a websocket URL.
     * Defaults to `false` to download data until completion.
     */
    websocket?: boolean;
    /**
     * Options object which will be passed through to websocket.
     */
    websocketOptions?: WebsocketOptions;
    /**
     * Set to `true` to specify that url is an eventsource URL.
     * Defaults to `false` to download data until completion.
     */
    eventsource?: boolean;
    /**
     * Options object which will be passed through to evensource.
     */
    eventsourceOptions?: EventSourceOptions;
    /**
     * Set the width in pixels for the component.
     * Defaults to `'auto'` if unspecified.
     * When the `width` is `'auto'`, the component will expand
     * horizontally to fill its container.
     */
    width?: string | number;
    /**
     * Wrap overflowing lines. Default is false
     */
    wrapLines?: boolean;
    /**
     * Set to `true` to specify that parent component will be calling `appendLines` to update data.
     * Parent component should hold a ref (with `useRef` or `createRef`) to the `LazyLog` component.
     * Defaults to `false`.
     */
    external?: boolean;
}
type LazyLogState = {
    count: number;
    currentResultsPosition: number;
    error?: ErrorStatus;
    filteredLines?: List<Uint8Array>;
    highlight?: Immutable.Seq.Indexed<number>;
    isFilteringLinesWithMatches: boolean;
    isSearching: boolean;
    lines: List<Uint8Array>;
    loaded?: boolean;
    offset: number;
    resultLineUniqueIndexes: number[];
    resultLines: number[];
    scrollOffset: number;
    scrollToIndex: number;
    scrollToLine: number;
    searchKeywords?: string;
    text?: string;
    url?: string;
};

/**
 * React component that loads and views remote text in the browser lazily and efficiently.
 * Logs can be loaded from static text, a URL, or a WebSocket and including ANSI highlighting.
 */
export default class LazyLog extends Component<LazyLogProps, LazyLogState> {
    static defaultProps: any = {
        containerStyle: {
            width: "auto",
            maxWidth: "initial",
            overflow: "initial",
        },
        caseInsensitive: false,
        enableGutters: false,
        enableHotKeys: false,
        enableLineNumbers: true,
        enableLinks: false,
        enableMultilineHighlight: true,
        enableSearch: false,
        enableSearchNavigation: true,
        wrapLines: false,
        extraLines: 0,
        fetchOptions: { credentials: "omit" as RequestCredentials },
        follow: false,
        formatPart: undefined,
        height: "auto",
        highlight: undefined,
        highlightLineClassName: "",
        lineClassName: "",
        onError: undefined,
        onHighlight: undefined,
        onLineNumberClick: undefined,
        onLoad: undefined,
        loading: undefined,
        overscanRowCount: 100,
        rowHeight: 19,
        scrollToLine: 0,
        searchMinCharacters: 2,
        selectableLines: false,
        stream: false,
        style: {},
        websocket: false,
        websocketOptions: {},
        eventsource: false,
        eventsourceOptions: {},
        width: "auto",
        external: false,
    };

    static getDerivedStateFromProps(
        {
            highlight,
            follow,
            scrollToLine,
            url: nextUrl,
            text: nextText,
        }: LazyLogProps,
        {
            count,
            offset,
            url: previousUrl,
            text: previousText,
            highlight: previousHighlight,
            isSearching,
            scrollToIndex,
        }: LazyLogState
    ) {
        const newScrollToIndex = isSearching
            ? scrollToIndex
            : getScrollIndex({ follow, scrollToLine, count, offset });
        const shouldUpdate =
            (nextUrl && nextUrl !== previousUrl) ||
            (nextText && nextText !== previousText);

        return {
            scrollToIndex: newScrollToIndex,
            highlight:
                previousHighlight === Range(0, 0)
                    ? getHighlightRange(highlight)
                    : previousHighlight || getHighlightRange(previousHighlight),
            ...(shouldUpdate
                ? {
                      url: nextUrl,
                      text: nextText,
                      lines: List(),
                      count: 0,
                      offset: 0,
                      loaded: false,
                      error: null,
                  }
                : null),
        };
    }

    state: LazyLogState = {
        resultLines: [],
        count: 0,
        currentResultsPosition: 0,
        isFilteringLinesWithMatches: false,
        isSearching: false,
        offset: 0,
        resultLineUniqueIndexes: [],
        scrollOffset: 0,
        scrollToIndex: 0,
        scrollToLine: 0,
        lines: List<Uint8Array>(),
    };

    emitter: any = undefined;
    encodedLog: Uint8Array | undefined = undefined;
    searchBarRef = React.createRef<SearchBar>();
    listRef = React.createRef<VListHandle>();

    componentDidMount() {
        this.request();
        if (this.props.scrollToLine) {
            setTimeout(() => {
                if (this.listRef && this.listRef.current) {
                    this.handleScrollToLine(this.props.scrollToLine);
                }
            }, 100);
        }
    }

    /**
     * Lifecycle method called after component updates. Handles various side effects and updates based on prop/state changes.
     * @param prevProps - Previous props before update
     * @param prevState - Previous state before update
     */
    componentDidUpdate(prevProps: LazyLogProps, prevState: LazyLogState) {
        // Destructure commonly used props and state
        const { props, state, listRef } = this;
        const {
            url, // URL to fetch log from
            text, // Direct text content
            follow, // Whether to auto-scroll to bottom
            extraLines, // Additional lines to render
            onLoad, // Callback when log loads
            onError, // Callback when error occurs
            highlight, // Lines to highlight
            onHighlight, // Callback when highlight changes
            scrollToLine, // Line number to scroll to
        } = props;
        const { scrollOffset, scrollToIndex, isSearching, loaded, error } =
            state;

        // Check if the data source (url or text) has changed
        const isDataChanged =
            prevProps.url !== url ||
            prevState.url !== state.url ||
            prevProps.text !== text;

        // If data source changed, make a new request
        if (isDataChanged) {
            this.request();
        }

        // If data changed and we're not following, maintain scroll position
        if (isDataChanged && !follow && scrollOffset > 0) {
            listRef?.current?.scrollTo(scrollOffset);
        }

        // Detect if user is manually scrolling
        const isScrolling = prevState.scrollOffset != scrollOffset;

        // Auto-scroll to bottom if:
        // - follow mode is enabled
        // - not currently searching
        // - user is not manually scrolling
        if (follow && !isSearching && !isScrolling) {
            listRef?.current?.scrollToIndex(scrollToIndex + (extraLines || 0), {
                align: "nearest",
            });
        }

        // Handle load state changes:
        // - Call onLoad when loading completes
        // - Call onError when error occurs
        if (!loaded && prevState.loaded !== loaded && onLoad) {
            onLoad();
        } else if (error && prevState.error !== error && onError) {
            onError(error);
        }

        // Handle highlight prop changes
        const isHighlightChanged =
            highlight && highlight !== prevProps.highlight;
        if (isHighlightChanged && onHighlight) {
            onHighlight(state.highlight!);
        }

        // Handle scrollToLine prop changes
        // Only scroll if not in follow mode
        const isScrollToLineChanged =
            scrollToLine && prevProps.scrollToLine !== scrollToLine;
        if (!follow && isScrollToLineChanged) {
            this.handleScrollToLine(scrollToLine);
        }
    }

    componentWillUnmount() {
        this.endRequest();
    }

    initEmitter() {
        const {
            stream: isStream,
            websocket: isWebsocket,
            eventsource: isEventsource,
            url,
            fetchOptions,
            websocketOptions,
            eventsourceOptions,
        } = this.props;

        if (isWebsocket) {
            return websocket(url!, websocketOptions!);
        }

        if (isEventsource) {
            return eventsource(url!, eventsourceOptions!);
        }

        if (isStream) {
            return stream(url!, fetchOptions);
        }

        return request(url!, fetchOptions!);
    }

    request() {
        const { text, url, external } = this.props;

        this.endRequest();

        if (text) {
            const encodedLog = encode(text);
            const { lines } = convertBufferToLines(encodedLog);
            this.handleUpdate({
                lines: lines,
                encodedLog,
            });
            this.handleEnd(encodedLog);
        }

        if (url) {
            this.emitter = this.initEmitter();
            this.emitter.on("update", this.handleUpdate);
            this.emitter.on("end", this.handleEnd);
            this.emitter.on("error", this.handleError);
            this.emitter.emit("start");
        }

        if (external) {
            const encodedLog = encode("");
            const { lines } = convertBufferToLines(encodedLog);
            this.handleUpdate({
                lines,
                encodedLog,
            });
        }
    }

    endRequest() {
        if (this.emitter) {
            this.emitter.emit("abort");
            this.emitter.off("update", this.handleUpdate);
            this.emitter.off("end", this.handleEnd);
            this.emitter.off("error", this.handleError);
            this.emitter = null;
        }
    }

    appendLines(newLines: string[]) {
        const content = newLines.join("\n");
        const newContent = encode(
            content.endsWith("\n") ? content : content + "\n"
        );
        const encodedLog = bufferConcat(this.encodedLog!, newContent);
        const { lines } = convertBufferToLines(newContent);
        this.handleUpdate({
            lines: lines,
            encodedLog,
        });
    }

    handleUpdate = ({ lines: moreLines, encodedLog }: any) => {
        this.encodedLog = encodedLog;
        const {
            scrollToLine,
            follow,
            stream,
            websocket,
            eventsource,
            external,
        } = this.props;

        // handle stream, socket and eventsource updates batched update mode
        if (stream || websocket || eventsource || external) {
            this.setState((state, props) => {
                const { scrollToLine, follow } = props;
                const { count: previousCount } = state;

                const offset = 0;
                const lines = (state.lines || List()).concat(moreLines);
                const count = lines.count();

                const scrollToIndex = getScrollIndex({
                    follow,
                    scrollToLine,
                    previousCount,
                    count,
                    offset,
                });

                return {
                    lines,
                    offset,
                    count,
                    scrollToIndex,
                };
            });

            this.forceSearch();
        } else {
            // regular text update in normal react hook mode
            const { count: previousCount } = this.state;

            const offset = 0;
            const lines = (this.state.lines || List()).concat(moreLines);
            const count = lines.count();

            const scrollToIndex = getScrollIndex({
                follow,
                scrollToLine,
                previousCount,
                count,
                offset,
            });

            this.setState({
                lines,
                offset,
                count,
                scrollToIndex,
            });
        }
    };

    handleEnd = (encodedLog: Uint8Array) => {
        this.encodedLog = encodedLog;
        this.setState({ loaded: true });

        if (this.props.onLoad) {
            this.props.onLoad();
        }
    };

    handleError = (err: ErrorStatus) => {
        this.setState({ error: err });

        if (this.props.onError) {
            this.props.onError(err);
        }
    };

    handleHighlight = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const { onHighlight, enableMultilineHighlight } = this.props;
        const { isFilteringLinesWithMatches } = this.state;

        if (!e.currentTarget.id) {
            return;
        }

        const lineNumber = +e.currentTarget.id;

        if (!lineNumber) {
            return;
        }

        const first = this.state.highlight?.first();
        const last = this.state.highlight?.last();
        let range;

        if (first === lineNumber) {
            range = null;
        } else if (!e.shiftKey || !first) {
            range = lineNumber;
        } else if (enableMultilineHighlight && lineNumber > first) {
            range = [first, lineNumber];
        } else if (!enableMultilineHighlight && lineNumber > first) {
            range = lineNumber;
        } else {
            range = [lineNumber, last];
        }

        const highlight = getHighlightRange(range);
        const state = { highlight };

        if (isFilteringLinesWithMatches) {
            Object.assign(state, {
                scrollToIndex: getScrollIndex({ scrollToLine: lineNumber }),
            });
        }

        this.setState(state, () => {
            if (onHighlight) {
                onHighlight(highlight);
            }

            if (isFilteringLinesWithMatches) {
                this.handleFilterLinesWithMatches(false);
            }
        });

        return highlight;
    };

    handleScrollToLine(scrollToLine = 0) {
        const scrollToIndex = getScrollIndex({
            scrollToLine,
        });

        this.setState({
            scrollToIndex,
            scrollToLine,
        });
        this.listRef?.current?.scrollToIndex(scrollToIndex, {
            align: "nearest",
        });
    }

    handleEnterPressed = () => {
        const {
            resultLines,
            scrollToLine,
            currentResultsPosition,
            isFilteringLinesWithMatches,
        } = this.state;

        if (!this.props.enableSearchNavigation) {
            this.handleFilterLinesWithMatches(!isFilteringLinesWithMatches);

            return;
        }

        // If we have search results
        if (resultLines) {
            // If we already scrolled to a line
            if (scrollToLine) {
                // Scroll to the next line if possible,
                // wrap to the top if we're at the end.

                if (currentResultsPosition + 1 < resultLines.length) {
                    this.handleScrollToLine(
                        resultLines[currentResultsPosition + 1]
                    );
                    this.setState({
                        currentResultsPosition: currentResultsPosition + 1,
                    });

                    return;
                }
            }

            this.handleScrollToLine(resultLines[0]);
            this.setState({ currentResultsPosition: 0 });
        }
    };

    handleShiftEnterPressed = () => {
        const { resultLines, scrollToLine, currentResultsPosition } =
            this.state;

        if (!this.props.enableSearchNavigation) {
            return;
        }

        // If we have search results
        if (resultLines) {
            // If we already scrolled to a line
            if (scrollToLine) {
                // Scroll to the previous line if possible,
                // wrap to the bottom if we're at the top.

                if (currentResultsPosition - 1 >= 0) {
                    this.handleScrollToLine(
                        resultLines[currentResultsPosition - 1]
                    );
                    this.setState({
                        currentResultsPosition: currentResultsPosition - 1,
                    });

                    return;
                }
            }

            this.handleScrollToLine(resultLines[resultLines.length - 1]);
            this.setState({ currentResultsPosition: resultLines.length - 1 });
        }
    };

    handleSearch = (keywords: string | undefined) => {
        const {
            resultLines,
            searchKeywords,
            currentResultsPosition: previousResultsPosition,
        } = this.state;
        const { caseInsensitive, stream, websocket, eventsource, external } =
            this.props;
        const currentResultLines =
            !stream &&
            !websocket &&
            !eventsource &&
            !external &&
            keywords === searchKeywords
                ? resultLines
                : searchLines(keywords, this.encodedLog!, caseInsensitive!);

        let currentResultsPosition = previousResultsPosition;
        if (currentResultsPosition > currentResultLines.length - 1) {
            currentResultsPosition = 0;
        }
        this.setState(
            {
                resultLines: currentResultLines,
                isSearching: true,
                searchKeywords: keywords,
                currentResultsPosition,
            },
            this.filterLinesWithMatches
        );
    };

    forceSearch = () => {
        const { searchKeywords } = this.state;
        const { searchMinCharacters } = this.props;

        if (
            searchKeywords &&
            searchKeywords.length > (searchMinCharacters || 0)
        ) {
            this.handleSearch(this.state.searchKeywords);
        }
    };

    handleClearSearch = () => {
        this.setState({
            isSearching: false,
            searchKeywords: "",
            resultLines: [],
            filteredLines: List<Uint8Array>(),
            resultLineUniqueIndexes: [],
            isFilteringLinesWithMatches: this.state.isFilteringLinesWithMatches,
            scrollToIndex: 0,
            currentResultsPosition: 0,
        });
    };

    handleFilterLinesWithMatches = (isFilterEnabled: boolean) => {
        this.setState(
            {
                isFilteringLinesWithMatches: isFilterEnabled,
                filteredLines: List(),
                resultLineUniqueIndexes: [],
            },
            this.filterLinesWithMatches
        );
    };

    filterLinesWithMatches = () => {
        const { resultLines, lines, isFilteringLinesWithMatches } = this.state;

        if (resultLines.length > 0 && isFilteringLinesWithMatches) {
            const resultLineUniqueIndexes = [...new Set<number>(resultLines)];

            this.setState({
                resultLineUniqueIndexes,
                filteredLines: lines?.filter(
                    (_line: Uint8Array, index: number) =>
                        resultLineUniqueIndexes.some(
                            (resultLineIndex) => index + 1 === resultLineIndex
                        )
                ),
            });
        }
    };

    handleFormatPart = (lineNumber: number) => {
        const {
            isSearching,
            searchKeywords,
            resultLines,
            currentResultsPosition,
        } = this.state;
        const { enableSearchNavigation } = this.props;

        if (isSearching) {
            // If browser-search has started and we're on the line
            // that has the search term that is selected
            if (
                enableSearchNavigation &&
                resultLines &&
                currentResultsPosition !== undefined &&
                resultLines[currentResultsPosition] === lineNumber
            ) {
                let locationInLine = 0;
                // Find the first occurrence of the line number
                // We use this to make sure we're only searching from where
                // the line number first occurs to the currentResultsPosition below
                const initialOccurrence = resultLines.findIndex(
                    (element: any) =>
                        element === resultLines[currentResultsPosition]
                );

                // This finds which word in the line should be the highlighted one.
                // For example, if we should be highlighting the 2nd match on line 18,
                // this would set locationInLine to 2.
                for (
                    let i = initialOccurrence;
                    i <= currentResultsPosition;
                    i += 1
                ) {
                    if (resultLines[i] === lineNumber) {
                        locationInLine += 1;
                    }
                }

                return searchFormatPart({
                    searchKeywords,
                    nextFormatPart: undefined,
                    caseInsensitive: this.props.caseInsensitive,
                    replaceJsx: (text: React.ReactNode, key: string) => (
                        <span key={key} className={styles.searchMatch}>
                            {text}
                        </span>
                    ),
                    selectedLine: true,
                    replaceJsxHighlight: (
                        text: React.ReactNode,
                        key: string
                    ) => (
                        <span
                            key={key}
                            className={styles.searchMatchHighlighted}
                        >
                            {text}
                        </span>
                    ),
                    highlightedWordLocation: locationInLine,
                });
            }

            return searchFormatPart({
                searchKeywords,
                nextFormatPart: undefined,
                caseInsensitive: this.props.caseInsensitive,
                replaceJsx: (text: React.ReactNode, key: string) => (
                    <span key={key} className={styles.searchMatch}>
                        {text}
                    </span>
                ),
                selectedLine: undefined,
                replaceJsxHighlight: undefined,
                highlightedWordLocation: undefined,
            });
        }

        return this.props.formatPart;
    };

    renderError() {
        const {
            url,
            lineClassName,
            selectableLines,
            highlightLineClassName,
            enableLinks,
            wrapLines,
        } = this.props;
        const { error } = this.state;

        return (
            <Fragment>
                <Line
                    wrapLines={wrapLines}
                    selectable={selectableLines}
                    className={lineClassName}
                    highlightClassName={highlightLineClassName}
                    enableLinks={enableLinks}
                    number="Error"
                    key="error-line-0"
                    data={[
                        {
                            bold: true,
                            foreground: "red",
                            text: error?.status
                                ? `${error?.message} (HTTP ${error?.status})`
                                : error?.message || "Network Error",
                        },
                    ]}
                />
                <Line
                    wrapLines={wrapLines}
                    selectable={selectableLines}
                    key="error-line-1"
                    className={lineClassName}
                    highlightClassName={highlightLineClassName}
                    enableLinks={enableLinks}
                    data={[
                        {
                            bold: true,
                            text: "An error occurred attempting to load the provided log.",
                        },
                    ]}
                />
                <Line
                    wrapLines={wrapLines}
                    selectable={selectableLines}
                    key="error-line-2"
                    className={lineClassName}
                    highlightClassName={highlightLineClassName}
                    enableLinks={enableLinks}
                    data={[
                        {
                            bold: true,
                            text: "Please check the URL and ensure it is reachable.",
                        },
                    ]}
                />
                <Line
                    wrapLines={wrapLines}
                    selectable={selectableLines}
                    key="error-line-3"
                    className={lineClassName}
                    highlightClassName={highlightLineClassName}
                    enableLinks={enableLinks}
                    data={[]}
                />
                <Line
                    wrapLines={wrapLines}
                    selectable={selectableLines}
                    key="error-line-4"
                    className={lineClassName}
                    highlightClassName={highlightLineClassName}
                    enableLinks={enableLinks}
                    data={[
                        {
                            foreground: "blue",
                            text: url,
                        },
                    ]}
                />
            </Fragment>
        );
    }

    renderRow = (options: { index: number }) => {
        const {
            rowHeight,
            selectableLines,
            lineClassName,
            highlightLineClassName,
            onLineNumberClick,
            onLineContentClick,
            gutter,
            enableGutters,
            enableLineNumbers,
            wrapLines,
            enableLinks,
        } = this.props;
        const {
            highlight,
            lines,
            offset,
            isFilteringLinesWithMatches,
            filteredLines,
            resultLineUniqueIndexes,
        } = this.state as LazyLogState;
        const linesToRender = isFilteringLinesWithMatches
            ? filteredLines
            : lines;
        const number = isFilteringLinesWithMatches
            ? resultLineUniqueIndexes[options.index]
            : options.index + 1 + offset;

        if (linesToRender?.size! <= 0) {
            return this.renderNoRows();
        }

        if (!number) {
            // A falsy number can only be a result of displaying filtered lines with extraLines, and this row is an extraLine.
            // In this case, do not render anything.
            return undefined;
        }

        const decodedLine = decode(linesToRender?.get(options.index));
        const parsedData = enableLinks
            ? parseLinks(ansiparse(decodedLine))
            : ansiparse(decodedLine);

        return (
            <Line
                className={`log-line ${lineClassName}`}
                data={parsedData}
                enableGutters={enableGutters}
                wrapLines={wrapLines}
                enableLineNumbers={enableLineNumbers}
                enableLinks={enableLinks}
                formatPart={this.handleFormatPart(number)}
                gutter={gutter ? gutter[number] : undefined}
                highlight={highlight?.includes(number)}
                highlightClassName={`log-highlight ${highlightLineClassName}`}
                key={options.index}
                number={number}
                rowHeight={rowHeight}
                selectable={selectableLines}
                onLineNumberClick={(e) => {
                    const highlighted = this.handleHighlight(e);
                    onLineNumberClick?.({
                        lineNumber: number,
                        highlightRange: highlighted,
                    });
                }}
                onLineContentClick={onLineContentClick}
            />
        );
    };

    renderNoRows = () => {
        const { lineClassName, highlightLineClassName, wrapLines } = this.props;
        const { error, count, loaded } = this.state;

        if (error) {
            return this.renderError();
        }

        // Handle case where log is empty
        if (!count && loaded) {
            return <></>;
        }

        // We don't do `if (loaded) {}` in order to handle
        // the edge case where the log is streaming
        if (count) {
            return (
                <Line
                    wrapLines={wrapLines}
                    className={lineClassName}
                    highlightClassName={highlightLineClassName}
                    data={[{ bold: true, text: "No filter matches" }]}
                />
            );
        }

        return this.props.loadingComponent || <Loading />;
    };

    calculateListHeight = (useCSSStyle: boolean = false) => {
        const { height, enableSearch } = this.props;

        if (!this.listRef?.current) {
            return 0;
        }

        const viewportHeight = this.listRef.current.viewportSize;
        const searchBarHeightAdjustment = enableSearch ? SEARCH_BAR_HEIGHT : 0;

        if (height === "auto") {
            if (useCSSStyle) {
                return enableSearch
                    ? `calc(100% - ${SEARCH_BAR_HEIGHT}px)`
                    : "100%";
            } else {
                return viewportHeight;
            }
        } else {
            return Number(height) - searchBarHeightAdjustment;
        }
    };

    getItemSize = (index: number) => this.props.rowHeight || 19;

    /**
     * Clears the log and search
     */
    clear() {
        this.searchBarRef.current?.setState({ keywords: "" });
        this.handleClearSearch();
        this.setState({
            count: 0,
            lines: List<Uint8Array>(),
            isFilteringLinesWithMatches: false,
        });
    }

    render() {
        const { enableSearch } = this.props;
        const {
            resultLines,
            isFilteringLinesWithMatches,
            filteredLines = List(),
            count,
            currentResultsPosition,
        } = this.state;
        const rowCount = isFilteringLinesWithMatches
            ? filteredLines.size
            : count;

        return (
            <Fragment>
                {enableSearch && (
                    <SearchBar
                        ref={this.searchBarRef}
                        currentResultsPosition={currentResultsPosition}
                        disabled={count === 0}
                        enableHotKeys={this.props.enableHotKeys}
                        enableSearchNavigation={
                            this.props.enableSearchNavigation
                        }
                        filterActive={isFilteringLinesWithMatches}
                        iconFilterLines={this.props.iconFilterLines}
                        iconFindNext={this.props.iconFindNext}
                        iconFindPrevious={this.props.iconFindPrevious}
                        onClearSearch={this.handleClearSearch}
                        onEnter={this.handleEnterPressed}
                        onFilterLinesWithMatches={
                            this.handleFilterLinesWithMatches
                        }
                        onSearch={this.handleSearch}
                        onShiftEnter={this.handleShiftEnterPressed}
                        resultsCount={resultLines.length}
                        searchMinCharacters={this.props.searchMinCharacters}
                    />
                )}
                <VList
                    ref={this.listRef}
                    className={`react-lazylog ${styles.lazyLog} ${
                        this.props.wrapLines ? styles.wrapLine : ""
                    }`}
                    style={{ height: this.calculateListHeight(true) }}
                    onScroll={(offset) => {
                        this.setState({
                            scrollOffset: offset,
                        });
                        // If there is an onScroll callback, call it.
                        if (this.props.onScroll) {
                            if (!this.listRef?.current) {
                                return;
                            }
                            const args = {
                                scrollTop: offset,
                                scrollHeight: this.listRef.current.scrollSize,
                                clientHeight:
                                    this.calculateListHeight() as number,
                            };
                            this.props.onScroll(args);
                        }
                    }}
                >
                    {Array.from({
                        length:
                            rowCount === 0
                                ? rowCount
                                : rowCount + (this.props.extraLines || 0),
                    }).map((_, i) => this.renderRow({ index: i }))}
                    {this.props.loading === true &&
                        (this.props.loadingComponent || <Loading />)}
                </VList>
            </Fragment>
        );
    }
}
