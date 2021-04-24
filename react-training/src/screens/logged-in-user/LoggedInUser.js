import React, { Component } from 'react';
import "./LoggedInUser.css";
import Tabs from "../../components/tabs/Tabs";
import Home from '../home/Home';
import Order from '../order/Order';

class LoggedInUser extends Component {
    render() {
        return (
            <Tabs>
                <div label="Home Page" >
                    <div className="content">
                        <Home onClickBuy={this.props.onClickBuy} />
                    </div>
                </div>
                <div label="Inprogress">
                    <div className="content">
                        <Order />
                    </div>
                </div>
                <div label="Completed">
                    <div className="content">

                    </div>
                </div>
            </Tabs>
        );
    }
}

export default LoggedInUser;
