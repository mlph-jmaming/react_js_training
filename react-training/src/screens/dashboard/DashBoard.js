import React from 'react';
import "./DashBoard.css";
import Tabs from "../../components/tabs/Tabs";
import Home from '../home/Home';
const DashBoard = () => {

    return (
        <Tabs>
            <div label="Home Page" >
                <div className="content">
                    <Home />
                </div>
            </div>
            <div label="" />
            <div label="" />
        </Tabs>
    );
}

export default DashBoard;
