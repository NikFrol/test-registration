import React from "react";

import styles from './button.module.css';

interface Props {
    text: string;
}
export function Button({ text }: Props) {
    return (
        <button className={styles.button}>{text}</button>
    )
}