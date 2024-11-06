import React, {
    CSSProperties,
    Component,
    MouseEventHandler,
    ReactNode,
} from "react";

import LineContent from "../LineContent";
import LineGutter from "../LineGutter";
import LineNumber from "../LineNumber";
import styles from "./index.module.css";

export interface LineProps {
    data?: any[];
    number?: number | string;
    rowHeight?: number;
    highlight?: boolean | undefined;
    selectable?: boolean | undefined;
    style?: CSSProperties | undefined;
    className?: string;
    gutter?: React.ReactNode;
    highlightClassName?: string;
    /**
     * Enable the line numbers to be displayed. Default is true.
     */
    enableLineNumbers?: boolean | undefined;
    /**
     * Enable the line gutters to be displayed. Default is false
     */
    enableGutters?: boolean | undefined;
    /**
     * Wrap overflowing lines. Default is false
     */
    wrapLines?: boolean | undefined;
    /**
     * Enable hyperlinks to be discovered in log text and made clickable links. Default is false.
     */
    enableLinks?: boolean;
    formatPart?: ((text: string) => ReactNode) | undefined;
    onLineNumberClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    /**
     * Callback to invoke on click of line contents.
     * @param {React.MouseEvent<HTMLElement>} event - Browser event.
     */
    onLineContentClick?(event: React.MouseEvent<HTMLSpanElement>): void;
}

/**
 * A single row of content, containing both the line number
 * and any text content within the line.
 */
export default class Line extends Component<LineProps, any> {
    static defaultProps: LineProps = {
        highlight: false,
        selectable: false,
        style: {},
        formatPart: undefined,
        onLineNumberClick: undefined,
        onLineContentClick: undefined,
        className: "",
        highlightClassName: "",
        enableLineNumbers: true,
        enableLinks: false,
        wrapLines: false,
    };

    render() {
        const {
            data,
            formatPart,
            highlight,
            selectable,
            onLineNumberClick,
            onLineContentClick,
            number,
            rowHeight,
            style,
            className,
            highlightClassName,
            gutter,
            wrapLines,
        } = this.props;
        const selectableClass = selectable ? ` ${styles.lineSelectable}` : "";
        const highlightClass = highlight
            ? ` ${styles.lineHighlight} ${highlightClassName}`
            : "";
        const classes = `${styles.line}${selectableClass}${highlightClass} ${
            wrapLines ? styles.wrap : ""
        } ${className}`;
        const lineStyle = {
            ...style,
            lineHeight: `${style ? style.height || rowHeight : rowHeight}px`,
            minWidth: style ? style.width || "100%" : "100%",
            width: undefined,
        } as CSSProperties;

        return (
            <div className={classes} style={lineStyle}>
                {this.props.enableLineNumbers ? (
                    <LineNumber
                        number={number}
                        highlight={highlight}
                        onClick={onLineNumberClick}
                        wrapLines={wrapLines}
                    />
                ) : null}
                {this.props.enableGutters ? (
                    <LineGutter gutter={gutter} />
                ) : null}
                <LineContent
                    wrapLines={wrapLines}
                    number={number}
                    formatPart={formatPart}
                    data={data}
                    onClick={onLineContentClick}
                    enableLinks={this.props.enableLinks}
                />
            </div>
        );
    }
}
