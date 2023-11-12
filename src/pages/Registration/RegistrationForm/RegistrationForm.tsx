import React from "react";
import { observer } from 'mobx-react';
import { Checkbox, Input } from "../../../common";
import { Button } from "../../../common/Button/Button";
import registrationStore from '../store';

import styles from './registrationForm.module.css';

export const RegistrationForm = observer(() => {

    const submit = async () => {
    
        await registrationStore.addNewUser();

    }

    return (
        <div className={styles.registrationForm}>
            <div className={styles.registrationForm__title}>Submit your details</div>
            <div className={styles.registrationForm__info}>
                <div
                    className={styles.registrationForm__inputs}
                >
                    <Input
                        label="Name"
                        onChange={(value) => registrationStore.changeUserInput('name', value)}
                        value={registrationStore.user.name}
                    />
                    <Input
                        label="Email"
                        onChange={(value) => registrationStore.changeUserInput('email', value)}
                        value={registrationStore.user.email}
                    />
                </div>
                <Checkbox
                    text="I want to revive updates via email."
                    change={(value) => registrationStore.changeUserAgreeEmailUpdate(value)}
                    checked={registrationStore.user?.isAgreeEmailUpdate}
                />
            </div>
            <Button
                text="Start the Course" onClick={() => submit()}
            />
        </div>
    )
});