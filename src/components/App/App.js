import React, {Component} from 'react';

import './App.css';

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

        const {navListItems} = this.state;

        const items = navListItems.map(it => {
            return (
                <NavListItem key={it.key} item={it}/>
            )
        });

        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-nav">
                        {items}
                    </div>
                </header>
            </div>
        );
    }
}

function NavListItem({item}) {
    const {label, target} = item;
    return (
        <span>
            <a href={target}>{label}</a>
        </span>
    )
}
