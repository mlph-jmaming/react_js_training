import { Component } from "react";
import "./Register.css"

class Register extends Component {

    render() {
        return (
            <div className="register-page-container">
                <p>First Name:</p>
                <input type="text"></input>

                <p className="title-style">Last Name:</p>
                <input type="text"></input>

                <p className="title-style">Email:</p>
                <input type="text"></input>

                <p className="title-style" >Password:</p>
                <input type="text"></input>
                <button className="btn-register">Register</button>
            </div>
        );
    }
}

export default Register;
