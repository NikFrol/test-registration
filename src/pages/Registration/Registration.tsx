import React from "react";
import { RegistrationForm } from "./RegistrationForm/RegistrationForm";

import styles from './registration.module.css';

export function RegistrationPage() {
    return (
        <div className={styles.registration}>
            <RegistrationForm />
            <div className={styles.registration__info}></div>
        </div>
    )
}