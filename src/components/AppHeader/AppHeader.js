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

                <NavBar
                    logo="LOGO"
                />

                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-10">
                            <h1 className="tinos bold">
                                Малочны <br/> маёнтак
                            </h1>
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="col-10">
                            <Line
                                color={'#FFDD1F'}
                                width={'20vw'}
                                x1={0}
                                x2={'20vw'}
                            />
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="col col-md-10">
                            <div className="header-paragraph">
                                <p>
                                    Фермерские продукты для всей семьи
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="col col-md-10">
                            <Button
                                label="Вся продукция"
                                onClick={this.onClick}
                            />
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}

const NavBar = (props) => {
    const {logo} = props;

    const items = [
        {id: 'a-about-us', label: 'О нас', target: '#about-us'},
        {id: 'a-products', label: 'Продукция', target: '#products'},
        {id: 'a-how-to-purchase', label: 'Как заказать', target: '#how-to-purchase'},
        {id: 'a-blog', label: 'Блог', target: '#blog'},
        {id: 'a-contacts', label: 'Контакты', target: '#contacts'}
    ];

    const navItems = items.map(it =>
        <NavItem
            key={it.id}
            label={it.label}
            target={it.target}
        />);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="container-fluid">
                    <div className="row justify-content-sm-center">
                        <div className="col-2">
                            <a className="navbar-brand" href="#header">{logo}</a>
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

const NavItem = ({label, target = '#'}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={target}>{label}</a>
        </li>
    )
};