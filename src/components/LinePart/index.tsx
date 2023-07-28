import React, { CSSProperties, Component, ReactNode } from "react";

import styles from "./index.module.css";

export interface LinePartCss {
    foreground?: string | number;
    bold?: string;
    background?: string;
    italic?: string;
    underline?: string;
    email?: boolean;
    link?: boolean;
    text: string;
}

const getClassName = (part: LinePartCss) => {
    const className = ["log-part"];

    if (part.foreground && part.bold) {
        className.push(styles[`${part.foreground}Bold`], styles.bold);
    } else if (part.foreground) {
        className.push(styles[part.foreground]);
    } else if (part.bold) {
        className.push(styles.bold);
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
     * Execute a function against each line part's
     * `text` property in `data` to process and
     * return a new value to render for the part.
     */
    format?: ((text: string) => ReactNode) | undefined;
    /**
     * Style for the line Part
     */
    style?: CSSProperties | undefined;
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
    };

    render() {
        const { format, part, style } = this.props;
        const partText = part.text;
        const partClassName = getClassName(part);

        if (part.link) {
            return (
                <span>
                    <a
                        className={partClassName}
                        href={partText}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {format ? format(partText) : partText}
                    </a>{" "}
                </span>
            );
        }

        if (part.email) {
            return (
                <span>
                    <a className={partClassName} href={`mailto:${partText}`}>
                        {format ? format(partText) : partText}
                    </a>{" "}
                </span>
            );
        }

        return (
            <span className={partClassName} style={style}>
                {format ? format(partText) : partText}{" "}
            </span>
        );
    }
}
