import React from 'react'

import './DocumentPanel.css'
import doc from './doc_1.png'

import {Col, Container, Row} from "react-bootstrap";

const DocumentPanel = (props) => {

    const {title, text} = props;

    return (
        <div className="panel panel-yellow documents-panel">
            <Container>
                <Row>
                    <Col sm={12} md={3} lg={3}>
                        <div className="image-container">
                            <img src={doc} alt=""/>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <div className="image-container">
                            <img src={doc} alt=""/>
                        </div>
                    </Col>
                    <Col sm={12} md={true} lg={true} className="order-first order-lg-last">
                        <div className="pl-lg-3 pl-sm-0">
                            <div className="title-container text-color-dark-grey">
                                <h2>{title}</h2>
                            </div>
                            <div className="text-container">
                                {text}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default DocumentPanel