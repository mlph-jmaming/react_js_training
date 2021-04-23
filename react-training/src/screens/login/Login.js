import { Component } from "react";
import "./Login.css"
import { Constants } from "../../Constants";

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    onLoginClick = () => {
        const users = Constants.getToLocalStorage(Constants.DATA_USER);
        console.log('Users', users);
        const user = users.filter(account =>
            account.email === this.state.email && account.password === this.state.password
        ).map(item => item);
        console.log('user', user);
        if (user.length > 0) {
            console.log('login success');
            this.props.handleClose();
            return;
        }
        alert('Email or password incorrect');
    }

    onInputChange = (type, value) => {
        if (type === Constants.EMAIL) {
            this.state.email = value;
        } else if (type === Constants.PASSWORD) {
            this.state.password = value;
        }
    }

    render() {
        return (
            <div className="login-page-container">
                <p>Email</p>
                <input type="email" onChange={(e) => this.onInputChange(Constants.EMAIL, e.target.value)}></input>

                <p className="text-style">Password</p>
                <input type="password" onChange={(e) => this.onInputChange(Constants.PASSWORD, e.target.value)}></input>
                <button onClick={this.onLoginClick} className="btn-login">Login</button>
            </div>
        );
    }
}

export default Login;