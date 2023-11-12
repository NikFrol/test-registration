import React from "react";
import styles from './input.module.css';

interface Props {
    label?: string
}

export function Input({ label }: Props) {
    return (
        <div className={styles.input__wrapper}>
            {label && <label>{label}</label>}
            <input></input>
        </div>
    )
}
