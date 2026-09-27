import React from "react";

import styles from "./index.module.css";

export const RegexIcon = React.memo(
    (props: React.HTMLAttributes<HTMLSpanElement>) => {
        return (
            <span className={styles.regexIcon} {...props} aria-hidden="true">
                .*
            </span>
        );
    }
);
