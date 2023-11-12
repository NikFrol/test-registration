import React, { ChangeEvent } from "react";
import styles from './input.module.css';

interface Props {
    label?: string;
    value: string;
    onChange?: (value: string) => void;
}

export function Input({ label, value, onChange }: Props) {

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.target.value);
    }
    return (
        <div className={styles.input__wrapper}>
            {label && <label className={styles.input__label}>{label}</label>}
            <input className={styles.input} onChange={changeValue} value={value} />
        </div>
    )
}
