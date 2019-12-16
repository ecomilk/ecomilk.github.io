import React from "react";
import './BenefitsPanel.css'

import Line from "../../Line";
import BenefitItem from "../BenefitItem";

import {Col, Container, Row} from "react-bootstrap";

const BenefitsPanel = (props) => {

    const {title, benefitItems = []} = props;

    const benefitElements = benefitItems.map(it => (
        <Col sm={12} md={true} lg={true}
             key={`benefit-item-container-${it.id}`}>
            <BenefitItem
                key={`benefit-item-${it.id}`}
                imgSrc={it.img}
                title={it.title}
            />
        </Col>
    ));

    return (
        <div className="panel panel-white">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12} md={true} lg={true}>
                        <div className="title-container text-color-dark-grey">
                            <h2>{title}</h2>
                        </div>
                        <Row>
                            <Col sm={10} md={3} lg={3}>
                                <Line/>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            {benefitElements}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default BenefitsPanel