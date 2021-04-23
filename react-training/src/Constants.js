export class Constants {
    static DATA_USER = 'user';
    static FIRST_NAME = 'first name';
    static LAST_NAME = 'last name';
    static ADDRESS = 'address';
    static EMAIL = 'email';
    static PASSWORD = 'password';

    static saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getToLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}
