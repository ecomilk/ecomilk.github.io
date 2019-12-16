import React from 'react'

import './SubscribeForm.css'
import Button from "../Button";
import {Col, Container, Row} from "react-bootstrap";

const SubscribeForm = (props) => {

    const {title = 'title', text = 'text'} = props;

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div id="subscribe-form" className="panel subscribe-form">
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="title-container text-color-dark-grey">
                            <h2>{title}</h2>
                        </div>
                        <div className="mt-3 text-secondary">
                            <span>{text}</span>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="row no-gutter justify-content-center mt-5">
                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0">
                                    <label htmlFor="input-email" className="sr-only">Email</label>
                                    <input type="email" className="form-control" id="input-email"
                                           placeholder="Введите Вашу почту"/>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <Button
                                        label="Отправить"
                                    />
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default SubscribeForm