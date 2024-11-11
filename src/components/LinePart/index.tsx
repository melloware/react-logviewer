import React, { CSSProperties, Component, ReactNode } from "react";

import styles from "./index.module.css";

export interface LinePartCss {
    foreground?: string | number;
    bold?: boolean;
    background?: string;
    italic?: boolean;
    underline?: boolean;
    email?: boolean;
    link?: boolean;
    text?: string;
    wrapLine?: boolean;
    [key: string]: any;
}

const getClassName = (part: LinePartCss, wrapLines: boolean) => {
    const className = ["log-part"];

    if (part.foreground && part.bold) {
        className.push(styles[`${part.foreground}Bold`], styles.bold);
    } else if (part.foreground) {
        className.push(styles[part.foreground]);
    } else if (part.bold) {
        className.push(styles.bold);
    }

    if (wrapLines) {
        className.push(styles.wrapLine);
    } else {
        className.push(styles.noWrapLine);
    }

    if (part.background) {
        className.push(styles[`${part.background}Bg`]);
    }

    if (part.italic) {
        className.push(styles.italic);
    }

    if (part.underline) {
        className.push(styles.underline);
    }

    return className.join(" ");
};

export interface LinePartProps {
    /**
     * The pieces of data to render in a line. Will typically
     * be multiple items in the array if ANSI parsed prior.
     */
    part: LinePartCss;
    /**
     * Style for the line Part
     */
    style?: CSSProperties | undefined;
    /**
     * Enable hyperlinks to be discovered in log text and made clickable links. Default is false.
     */
    enableLinks?: boolean;
    /**
     * Execute a function against each line part's
     * `text` property in `data` to process and
     * return a new value to render for the part.
     */
    format?: ((text: string) => ReactNode) | undefined;
    /**
     * Wrap overflowing lines. Default is false
     */
    wrapLines?: boolean | undefined;
}

/**
 * An individual segment of text within a line. When the text content
 * is ANSI-parsed, each boundary is placed within its own `LinePart`
 * and styled separately (colors, text formatting, etc.) from the
 * rest of the line's content.
 */
export default class LinePart extends Component<LinePartProps, any> {
    static defaultProps = {
        format: null,
        style: null,
        enableLinks: false,
        wrapLines: false,
    };

    render() {
        const { format, part, style } = this.props;
        const partText = part.text;
        const partClassName = getClassName(part, !!this.props.wrapLines);
        const renderedText = format ? format(partText!) : partText!;

        if (this.props.enableLinks) {
            if (part.link) {
                return (
                    <span>
                        <a
                            className={partClassName}
                            href={partText}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {renderedText}
                        </a>{" "}
                    </span>
                );
            }

            if (part.email) {
                return (
                    <span>
                        <a
                            className={partClassName}
                            href={`mailto:${partText}`}
                        >
                            {renderedText}
                        </a>{" "}
                    </span>
                );
            }
        }

        return (
            <span className={partClassName} style={style}>
                {renderedText}
                {this.props.enableLinks ? " " : null}
            </span>
        );
    }
}
