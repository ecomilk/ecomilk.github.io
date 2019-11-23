import React, {Component} from 'react';

import './App.css';

import AppHeader from "../AppHeader/AppHeader";
import AboutUs from "../AboutUs";
import Products from "../Products/Products";
import Documents from "../Documents/Documents";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

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
            ],

            sections: [
                {
                    id: 4,
                    name: 'documents',
                    title: 'Документация и сертификаты качества',
                    text: 'Соответствующему всем европейским стандартам качества и производительностью 4 тонны сыра в месяц? Непросто, местами очень сложно, но всегда полные веры в то, что мы движемся в правильном направлении. Соответствующему всем европейским стандартам качества и производительностью 4 тонны сыра в месяц?',
                    images: [
                        {id: 0, src:''}
                    ]
                },
                {
                    id: 4,
                    name: 'subscribeForm',
                    url:'api/subscribe'
                }
            ]
        }
    }

    render() {

        const {sections} = this.state;

        const documentsProps = sections.filter(it => it.name === 'documents');
        const subscribeFormProps = sections.filter(it => it.name === 'subscribeForm');

        return (
            <div className="app">
                <AppHeader />
                <AboutUs />
                <Products />
                <Documents {...documentsProps}/>
                <SubscribeForm {...subscribeFormProps}/>
            </div>
        )
    }
}
