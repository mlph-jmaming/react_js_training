import React from 'react';
import "./LoggedInUser.css";
import Tabs from "../../components/tabs/Tabs";
import Home from '../home/Home';
import Order from '../order/Order';

const LoggedInUser = () => {

    return (
        <Tabs>
            <div label="Home Page" >
                <div className="content">
                    <Home />
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

export default LoggedInUser;
