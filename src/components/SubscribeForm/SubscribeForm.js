import React, {Component} from 'react'

import './SubscribeForm.css'
import Button from "../Button";
import {Col, Container, Row} from "react-bootstrap";

export default class SubscribeForm extends Component {

    onSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div id="subscribe-form" className="panel subscribe-form">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h3>Подписаться на рассылку</h3>
                            <div className="mt-3 text-secondary">
                                <span>Подпишитесь, чтобы быть в курсе последних предложений и акций</span>
                            </div>
                            <form onSubmit={this.onSubmit}>
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
    }
}