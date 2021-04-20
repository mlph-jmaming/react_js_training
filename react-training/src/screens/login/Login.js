import { Component } from "react";
import "./Login.css"

class Login extends Component {

    render() {
        return (
            <div className="login-page-container">
                <p>Email</p>
                <input type="text"></input>

                <p className="text-style">Password</p>
                <input type="text"></input>
                <button className="btn-login">Login</button>
            </div>
        );
    }
}

export default Login;