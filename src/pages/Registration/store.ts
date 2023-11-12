import { makeAutoObservable } from 'mobx';
import { User } from '../../Serveces/User';

class RegistrationStore {
    user = {
        name: '',
        email: '',
        isAgreeEmailUpdate: false,
    }

    userService = new User();

    constructor() {
        makeAutoObservable(this);
    }
    changeUserInput(key: 'name' | 'email', value: string) {
        this.user[key] = value;
    }
    changeUserAgreeEmailUpdate(value: boolean) {
        this.user.isAgreeEmailUpdate = value;
    }

    async addNewUser() {
        await this.userService.addUser(this.user);
    }
}

const registrationStore = new RegistrationStore();

export default registrationStore;