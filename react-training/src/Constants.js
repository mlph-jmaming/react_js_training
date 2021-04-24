export class Constants {
    // keys
    static DATA_USER = 'user';
    static FIRST_NAME = 'first name';
    static LAST_NAME = 'last name';
    static ADDRESS = 'address';
    static EMAIL = 'email';
    static PASSWORD = 'password';
    static LOGGED_IN_USER = "logged in user";
    static ORDER = "order";

    static LOGIN = "login";
    static SIGN_UP = "sign up";
    static BUY = "buy";

    static saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getToLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}
