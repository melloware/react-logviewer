import React, { CSSProperties, Component, MouseEventHandler } from "react";

import styles from "./index.module.css";

export interface LineNumberProps {
    /**
     * The line number to display in the anchor.
     */
    number: string | number | undefined;
    /**
     * Specify whether this line is highlighted.
     */
    highlight?: boolean | undefined;
    /**
     * Execute a function when the line number is clicked.
     */
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    /**
     * CSS style for the Line Number.
     */
    style?: CSSProperties | undefined;
}

/**
 * The line number of a single line.
 * The anchor contained within is interactive, and will highlight the
 * entire line upon selection.
 */
export default class LineNumber extends Component<LineNumberProps, any> {
    static defaultProps = {
        style: null,
        highlight: false,
        onClick: null,
    };

    render() {
        const { highlight, onClick, number, style } = this.props;
        const className = `log-number ${
            highlight ? styles.lineNumberHighlight : styles.lineNumber
        }`;

        return (
            <a
                id={"" + number}
                onClick={onClick}
                className={className}
                style={style}
            />
        );
    }
}
