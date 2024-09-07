import React, { Component } from "react";

import styles from "./index.module.css";

export interface LineGutterProps {
    /**
     * The gutter object
     */
    gutter: React.ReactNode;
}

/**
 * The gutter is an element between the line number and content.
 */
export default class LineGutter extends Component<LineGutterProps> {
    static defaultProps = {
        gutter: null,
    };

    render() {
        const { gutter } = this.props;

        return (
            <span className={`log-gutter ${styles.lineGutter}`}>{gutter}</span>
        );
    }
}
