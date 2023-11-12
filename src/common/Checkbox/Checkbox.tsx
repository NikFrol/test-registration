import React, { useState } from "react";

import styles from './checkbox.module.css';

interface Props {
    text?: string;
    checked: boolean;
    isWarning?: boolean;
    change: (value: boolean) => void;
}

export function Checkbox({ text, checked, isWarning, change }: Props) {
    const [isChecked, setIsChecked] = useState(checked);
    const [isHoverChecked, setIsHoverChecked] = useState(false);

    const onChange = () => {
        change && change(!isChecked);
        setIsChecked(!isChecked)
    }
    return (
        <div className={styles.checkbox}>
            <label
                className={`${styles.checkbox__label} ${isChecked ? styles.checkbox__label_checked : ''} ${isWarning && styles.checkbox__label_warning}`}
                onClick={onChange}
                onMouseOver={() => setIsHoverChecked(isChecked && true)}
                onMouseLeave={() => setIsHoverChecked(false)}
            >
                {isChecked &&
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.5L4.5 10L10.5 1" stroke={isHoverChecked ? '#FFF' : '#35694F'} strokeWidth="2.5" />
                    </svg>
                }

            </label>
            <span>{text}</span>
        </div>
    )
}