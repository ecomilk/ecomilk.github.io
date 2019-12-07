import React from 'react'
import './AboutUs.css'

import {Col, Container, Row} from "react-bootstrap";

import Line from "../Line";

const AboutUsPanel = (props) => {
    const {title, text, img} = props;
    return (
        <div className="about-us-panel pb-sm-5 pt-sm-5" id="about-us-panel">
            <Container>
                <Row className="about-us-container">
                    <Col sm={12} md={6} lg={6}>
                        <div className="image">
                            <img src={img} alt=""/>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="content">
                            <div className="mt-4 mt-md-0 mt-lg-0">
                                <h2>{title}</h2>
                            </div>
                            <Line
                                color={'#FFDD1F'}
                                width={'20vw'}
                                x1={0}
                                x2={'20vw'}
                            />
                            <div>
                                <p className="text-secondary">
                                    {text}
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default AboutUsPanel