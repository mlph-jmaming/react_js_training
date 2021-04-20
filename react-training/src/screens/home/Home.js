import { GridList } from "@material-ui/core";
import { Component } from "react";
import Item from "../../components/cart-item/Item";
import "./Home.css"

const tileData = [
    {
        image: "https://d33wubrfki0l68.cloudfront.net/66f9b8c9992a0bbafbc9f7a9259f35b5483e08ba/208f5/assets/login-page-added.png",
        title: "test title1"
    },
    {
        image: "./Home.css",
        title: "test 2"
    }
    , {
        image: "./cart.jpeg",
        title: "test title3"
    },
    {
        image: "./Home.css",
        title: "test 24"
    }, {
        image: "./cart.jpeg",
        title: "test title"
    },
    {
        image: "./Home.css",
        title: "test 25"
    },
    {
        image: "./cart.jpeg",
        title: "test title6"
    },
    {
        image: "./Home.css",
        title: "test 27"
    }
];

class Home extends Component {

    render() {
        return (
            <div className="grid-container">
                <GridList cols={3} cellHeight={250} style={{ height: 'auto' }} >
                    {
                        tileData.map(data =>
                            <ul key={data.title}>
                                <Item key={data.title} cart={data.image} imageUrl={data.image} title={data.title} />
                            </ul>
                        )
                    }
                </GridList>
            </div>
        );
    }
}

export default Home;