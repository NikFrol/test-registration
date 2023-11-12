import { makeAutoObservable } from 'mobx';
import { User } from '../../Serveces/User';

type userKey = 'name' | 'email' | 'isAgreeEmailUpdate';

class RegistrationStore {
    user = {
        name: '',
        email: '',
        isAgreeEmailUpdate: false,
    }

    emptyFields = {
        name: false,
        email: false,
        isAgreeEmailUpdate: false,
    }

    userService = new User();

    constructor() {
        makeAutoObservable(this);
    }

    private isEmptyField(key: userKey) {
        return !this.user[key];
    }

    private changeValidField(key: userKey) {
        this.emptyFields[key] = this.isEmptyField(key);
    }

    changeUserInput(key: 'name' | 'email', value: string) {
        this.user[key] = value;
        this.changeValidField(key);
        if(key === 'email') {
            const validEmail = this.checkValidEmail(value)
            this.emptyFields.email = !validEmail;
        }
    }
    changeUserAgreeEmailUpdate(value: boolean) {
        this.user.isAgreeEmailUpdate = value;
        this.changeValidField('isAgreeEmailUpdate');
    }

    async addNewUser() {
        Object.keys(this.emptyFields).forEach(field => this.changeValidField(field as userKey));
        if (Object.values(this.emptyFields).includes(true)) {
            return;
        }
        return await this.userService.addUser(this.user);
    }

    private checkValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

const registrationStore = new RegistrationStore();

export default registrationStore;