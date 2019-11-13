import React, {Component} from 'react';

import './App.css';

import AppHeader from "../AppHeader/AppHeader";
import AboutUs from "../AboutUs";
import Products from "../Products/Products";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

            navListItems: [
                {key: 'about-us', label: 'О Нас', target: '#about-us'},
                {key: 'products', label: 'Продукция', target: '#products'},
                {key: 'how-to-order', label: 'Как заказать', target: '#how-to-order'},
                {key: 'blog', label: 'Блог', target: '#blog'},
                {key: 'contacts', label: 'Контакты', target: '#contacts'},
            ]
        }
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <AboutUs />
                <Products />
            </div>
        )
    }
}
