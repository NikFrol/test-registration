import React from "react";
import { Checkbox, Input } from "../../../common";
import { Button } from "../../../common/Button/Button";

import styles from './registrationForm.module.css';

export function RegistrationForm() {
    return (
        <form className={styles.registrationForm}>
            <div className={styles.registrationForm__title}>Submit your details</div>
            <div className={styles.registrationForm__info}>
                <div
                    className={styles.registrationForm__inputs}
                >
                    <Input label="Name" />
                    <Input label="Email" />
                </div>
                <Checkbox text="I want to revive updates via email." />
            </div>
            <Button text="Start the Course" onClick={() => {}}/>
        </form>
    )
}