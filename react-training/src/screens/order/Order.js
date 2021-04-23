import { GridList } from "@material-ui/core";
import { Component } from "react";
import OrderItem from "../../components/order-item/OrderItem";
import "./Order.css"

const tileData = [
    {
        imageUrl: "https://d33wubrfki0l68.cloudfront.net/66f9b8c9992a0bbafbc9f7a9259f35b5483e08ba/208f5/assets/login-page-added.png",
        title: "test title1"
    }
];

class Order extends Component {

    render() {
        return (
            <div className="grid-container">
                <GridList cols={3} cellHeight={250} style={{ height: 'auto' }} >
                    {
                        tileData.map(data =>
                            <ul key={data.title}>
                                <OrderItem key={data.title} imageUrl={data.imageUrl} />
                            </ul>
                        )
                    }
                </GridList>
            </div>
        );
    }
}

export default Order;