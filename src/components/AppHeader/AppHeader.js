import React, {Component} from 'react'

import './AppHeader.css'
import Button from "../Button";

export default class AppHeader extends Component {

    getNavItems = () => {

    };

    onClick = (event) => {
        console.log(event.target)
    };

    render() {
        return (
            <header className="app-header">

                <NavBar/>

                <h1 className="tinos bold">
                    Малочны <br/> маёнтак
                </h1>

                <Line
                    color={'#FFDD1F'}
                    width={'20vw'}
                    x1={0}
                    x2={'20vw'}
                />

                <div>
                    <p>
                        Фермерские продукты для всей семьи
                    </p>
                </div>

                <Button
                    label="Вся продукция"
                    onClick={this.onClick}
                />

            </header>
        )
    }
}

const NavBar = () => {
    const items = [
        {id: 'a-about-us', label: 'О нас', target: '#about-us'},
        {id: 'a-products', label: 'Продукция', target: '#products'},
        {id: 'a-how-to-purchase', label: 'Как заказать', target: '#how-to-purchase'},
        {id: 'a-blog', label: 'Блог', target: '#blog'},
        {id: 'a-contacts', label: 'Контакты', target: '#contacts'}
    ];

    const navItems = items.map(it =>
        (<NavItem
            key={it.id}
            label={it.label}
            target={it.target}
        />));

    return (
        <nav className="navbar navbar-expand-lg ">
            <a className="navbar-brand" href="#header">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {navItems}
                </ul>
            </div>
        </nav>
    )
};

const NavItem = ({label, target='#'}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={target}>{label}</a>
        </li>
    )
};

const Line = ({color, width, height = 4, x1, x2, y1 = 0, y2 = 0}) => {
    const style = {
        stroke: color,
        strokeWidth: 4
    };

    return (
        <div>
            <svg height={height} width={width}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} style={style} />
            </svg>
        </div>
    )
};