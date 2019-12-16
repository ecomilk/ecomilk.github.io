import React from 'react'
import './AboutUsPanel.css'

import {Col, Container, Row} from "react-bootstrap";

import Line from "../Line";

const AboutUsPanel = (props) => {
    const {title, text, img} = props;
    return (
        <div className="panel about-us-panel" id="about-us-panel">
            <Container>
                <Row className="about-us-container">
                    <Col sm={12} md={6} lg={6}>
                        <div className="image">
                            <img src={img} alt=""/>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="content">
                            <div className="title-container text-color-dark-grey">
                                <h2>{title}</h2>
                            </div>
                            <Line x2={'60%'}
                            />
                            <div>
                                <span className="text-secondary">
                                    {text}
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default AboutUsPanel