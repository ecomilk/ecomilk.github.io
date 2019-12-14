import React from 'react'

import './Header.css'
import Button from "../Button";
import Line from "../Line";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

const Header = (props) => {

    const {navLinkItems = [], logo = 'Logo'} = props;

    const navLinkElements = navLinkItems.map(it =>
        <Nav.Link key={`nav-link-item-${it.id}`} href={it.href}>{it.label}</Nav.Link>
    );

    return (
        <header className="app-header">

            <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home">{logo}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav justify={true}>
                            {navLinkElements}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

            <Container>
                <Row className="row justify-content-md-center">
                    <Col sm={12} md={12} lg={12}>
                        <h1 className="tinos font-weight-bold">
                            Малочны <br/> маёнтак
                        </h1>
                    </Col>
                    <Col>
                        <Row>
                            <Col sm={12} md={3} lg={3}>
                                <Line/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-sm-4 mt-lg-3">
                    <Col>
                        <div>
                            <p>
                                Фермерские продукты для всей семьи
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-sm-4 mt-lg-4">
                    <Col sm={12} md={3} lg={3}>
                        <Button
                            href="#products-panel"
                            label="Вся продукция"
                        />
                    </Col>
                </Row>
            </Container>

        </header>
    )
};

export default Header