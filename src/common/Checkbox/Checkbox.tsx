import React, { useState } from "react";

import styles from './checkbox.module.css';

interface Props {
    change?: () => void;
    text?: string;
}

export function Checkbox({ text, change }: Props) {
    const [isChecked, setIsChecked] = useState(false);
    const [isHoverChecked, setIsHoverChecked] = useState(false);

    const onChange = () => {
        change && change();
        setIsChecked(!isChecked)
    }
    return (
        <div className={styles.checkbox}>
            <label
                className={`${styles.checkbox__label} ${isChecked ? styles.checkbox__label_checked : ''}`}
                onClick={onChange}
                onMouseOver={() => setIsHoverChecked(isChecked && true)}
                onMouseLeave={() => setIsHoverChecked(false)}
            >
                {isChecked &&
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.5L4.5 10L10.5 1" stroke={isHoverChecked ? '#FFF':'#35694F'} stroke-width="2.5" />
                    </svg>
                }

            </label>
            <span>{text}</span>
        </div>
    )
}