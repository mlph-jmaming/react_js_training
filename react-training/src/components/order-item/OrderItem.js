import { Component } from "react";
import "./OrderItem.css";

class OrderItem extends Component {

    state = {
        imageUrl: this.props.imageUrl,
        title: this.props.title,
        status: 'pending'
    }

    render() {
        return (
            <div className="item-container">
                <img className="item-image"
                    src={this.state.imageUrl}></img>
                <div>
                    <p className="center-text">{this.state.title}</p>
                    <div className="button-container ">
                        <a>Status : {this.state.status}</a>
                        <a className="view-style">View</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default OrderItem;
