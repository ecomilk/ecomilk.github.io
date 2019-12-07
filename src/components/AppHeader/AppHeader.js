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
                        <div className="col-md-10">
                            <h1 className="tinos font-weight-bold">
                                Малочны <br/> маёнтак
                            </h1>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row justify-content-start">
                                <div className="col-sm-12 col-lg-3">
                                    <Line/>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row justify-content-center mt-sm-4 mt-lg-3">
                        <div className="col-md-10">
                            <div>
                                <p>
                                    Фермерские продукты для всей семьи
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-sm-4 mt-lg-4">
                        <div className="col-md-10">
                            <div className="row justify-content-start">
                                <div className="col-sm-12 col-lg-3">
                                    <Button
                                        label="Вся продукция"
                                        onClick={this.onClick}
                                    />
                                </div>
                            </div>
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
                <div className="container-fluid p-0">
                    <div className="row justify-content-sm-center">
                        <div className="col-3">
                            <a className="navbar-brand" href="#header">{logo}</a>
                        </div>
                        <div className="col-7">
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
        <li className="nav-item ml-4 mr-4">
            <a className="nav-link" href={target}>{label}</a>
        </li>
    )
};