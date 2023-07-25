/* eslint-disable @typescript-eslint/no-empty-function */
import hotkeys from "hotkeys-js";

import React, { Component, Fragment, RefObject, createRef } from "react";

import { SEARCH_MIN_KEYWORDS } from "../Utils/utils";
import { DownArrowIcon } from "./ArrowIcons/DownArrowIcon";
import { UpArrowIcon } from "./ArrowIcons/UpArrowIcon";
import { FilterLinesIcon } from "./FilterLinesIcon";
import styles from "./index.module.css";

export interface SearchBarProps {
    /**
     * If true, capture system hotkeys for searching the page (Cmd-F, Ctrl-F,
     * etc.)
     */
    enableHotKeys?: boolean | undefined;
    /**
     * The current result the browser search is highlighting.
     * Only applicable if searchLikeBrowser is true.
     * Defaults to 0.
     */
    currentResultsPosition: number;
    /**
     * If true, the input field and filter button will be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * If true, then only lines that match the search term will be displayed.
     */
    filterActive: boolean;
    /**
     * Executes a function when the search input has been cleared.
     */
    onClearSearch?: (() => void) | undefined;
    /**
     * Executes a function when the option `Filter Lines With Matches`
     * is enable.
     */
    onFilterLinesWithMatches: ((isFiltered: boolean) => void) | undefined;
    /**
     * Executes a function when the user starts typing.
     */
    onSearch?: ((keyword: string) => void) | undefined;
    /**
     * Exectues a function when enter is pressed.
     */
    onEnter?: ((e: React.UIEvent<HTMLElement>) => void) | undefined;
    /**
     * Exectues a function when shift + enter is pressed.
     */
    onShiftEnter?: ((e: React.UIEvent<HTMLElement>) => void) | undefined;
    /**
     * Number of search results. Should come from the component
     * executing the search algorithm.
     */
    resultsCount?: number | undefined;
    /**
     * If true, adds up and down arrows to search bar to jump
     * to the next and previous result. The down arrow calls
     * "onEnter" and the up arrow calls "onShiftEnter"
     * Defaults to false, which does not add the arrows.
     */
    enableSearchNavigation?: boolean | undefined;
}
type SearchBarState = {
    keywords?: string;
};

export default class SearchBar extends Component<
    SearchBarProps,
    SearchBarState
> {
    static defaultProps = {
        onSearch: () => {},
        onClearSearch: () => {},
        onFilterLinesWithMatches: () => {},
        resultsCount: 0,
        filterActive: false,
        disabled: false,
        enableHotKeys: false,
        currentResultsPosition: 0,
    };

    state: SearchBarState = {
        keywords: "",
    };
    inputRef: RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.inputRef = createRef<HTMLInputElement>();
    }

    handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: keywords } = e.target;

        this.setState({ keywords }, () => this.search());
    };

    handleFilterToggle = () => {
        this.props.onFilterLinesWithMatches &&
            this.props.onFilterLinesWithMatches(!this.props.filterActive);
    };

    handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter") {
            if (e.shiftKey) {
                this.props.onShiftEnter && this.props.onShiftEnter(e);
            } else {
                this.props.onEnter && this.props.onEnter(e);
            }
        }
    };

    handleSearchHotkey = (e: KeyboardEvent) => {
        if (!this.inputRef.current) {
            return;
        }

        e.preventDefault();
        this.inputRef.current.focus();
    };

    search = () => {
        const { keywords } = this.state;
        const { onSearch, onClearSearch } = this.props;

        if (keywords && keywords.length > SEARCH_MIN_KEYWORDS) {
            onSearch && onSearch(keywords);
        } else {
            onClearSearch && onClearSearch();
        }
    };

    componentDidMount() {
        if (this.props.enableHotKeys) {
            hotkeys("ctrl+f,command+f", this.handleSearchHotkey);
            hotkeys.filter = () => true;
        }
    }

    componentWillUnmount() {
        if (this.props.enableHotKeys) {
            hotkeys.deleteScope("all");
        }
    }

    render() {
        const {
            resultsCount,
            filterActive,
            disabled,
            enableSearchNavigation,
            currentResultsPosition,
            onEnter,
            onShiftEnter,
        } = this.props;
        const matchesLabel = `match${resultsCount === 1 ? "" : "es"}`;
        const filterIcon = filterActive ? styles.active : styles.inactive;
        const arrowIcon = resultsCount ? styles.active : styles.inactive;

        return (
            <div className={`react-lazylog-searchbar ${styles.searchBar}`}>
                <span
                    className={`react-lazylog-searchbar-matches ${
                        resultsCount ? "active" : "inactive"
                    } ${resultsCount ? styles.active : styles.inactive}`}
                    style={{ marginRight: "10px" }}
                >
                    {enableSearchNavigation && resultsCount
                        ? `${
                              currentResultsPosition + 1
                          } of ${resultsCount} ${matchesLabel}`
                        : `${resultsCount} ${matchesLabel}`}
                </span>
                <input
                    autoComplete="off"
                    type="text"
                    name="search"
                    placeholder="Search"
                    className={`react-lazylog-searchbar-input ${styles.searchInput}`}
                    onChange={this.handleSearchChange}
                    onKeyUp={this.handleKeyPress}
                    value={this.state.keywords}
                    disabled={disabled}
                    ref={this.inputRef}
                />
                <button
                    disabled={disabled}
                    className={`react-lazylog-searchbar-filter ${
                        filterActive ? "active" : "inactive"
                    } ${styles.button} ${filterIcon} ${styles.clickable}`}
                    onKeyUp={this.handleKeyPress}
                    onMouseUp={this.handleFilterToggle}
                >
                    <FilterLinesIcon />
                </button>
                {enableSearchNavigation && (
                    <Fragment>
                        <button
                            disabled={disabled}
                            className={`react-lazylog-searchbar-up-arrow ${
                                resultsCount
                                    ? `active ${styles.clickable}`
                                    : "inactive"
                            } ${styles.button} ${arrowIcon}`}
                            onClick={onShiftEnter}
                        >
                            <UpArrowIcon />
                        </button>
                        <button
                            disabled={disabled}
                            className={`react-lazylog-searchbar-down-arrow ${
                                resultsCount
                                    ? `active ${styles.clickable}`
                                    : "inactive"
                            } ${styles.button} ${arrowIcon}`}
                            onClick={onEnter}
                        >
                            <DownArrowIcon />
                        </button>
                    </Fragment>
                )}
            </div>
        );
    }
}
