import React, {Component} from 'react'

import './AppHeader.css'
import Button from "../Button";
import Line from "../Line";

export default class AppHeader extends Component {

    onClick = (event) => {
        console.log(event.target)
    };

    render() {
        return (
            <header className="app-header">

                <NavBar/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-10">
                            <h1 className="tinos bold">
                                Малочны <br/> маёнтак
                            </h1>
                        </div>
                        <div className="col-1">

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-10">
                            <Line
                                color={'#FFDD1F'}
                                width={'20vw'}
                                x1={0}
                                x2={'20vw'}
                            />
                        </div>
                        <div className="col-1">

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-10">
                            <div className="header-paragraph">
                                <p>
                                    Фермерские продукты для всей семьи
                                </p>
                            </div>
                        </div>
                        <div className="col-1">

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-10">
                            <Button
                                label="Вся продукция"
                                onClick={this.onClick}
                            />
                        </div>
                        <div className="col-1">

                        </div>
                    </div>
                </div>

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
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-2">
                            <a className="navbar-brand" href="#header">LOGO</a>
                        </div>
                        <div className="col-8">
                            <ul className="navbar-nav">
                                {navItems}
                            </ul>
                        </div>
                    </div>
                </div>
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