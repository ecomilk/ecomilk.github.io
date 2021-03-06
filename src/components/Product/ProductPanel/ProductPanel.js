import React from 'react'

import './ProductPanel.css'
import Line from "../../Line";
import Button from "../../Button";
import ProductItem from "../ProductItem";
import {Col, Container, Row} from "react-bootstrap";

const ProductPanel = (props) => {

    const {title, productItems = []} = props;

    const productElements = productItems.map(it => (
        <Col sm={12} md={true} lg={true}
             key={`product-item-container-${it.id}`}
             className="mb-4">
            <ProductItem
                key={`product-item-${it.id}`}
                id={it.id}
                img={it.img}
                title={it.title}
                text={it.text}
            />
        </Col>
    ));

    return (
        <div className="panel product-panel panel-light-grey" id="products-panel">
            <Container>
                <Row>
                    <Col sm={12} md={true} lg={true}>
                        <div className="products-container mb-sm-5">
                            <div className="title-container text-color-dark-grey">
                                <h2>{title}</h2>
                            </div>
                            <Row>
                                <Col sm={12} md={3} lg={3}>
                                    <Line/>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {productElements}
                </Row>

                <Row className="mt-5">
                    <Col sm={12} md={3} lg={3}>
                        <Button
                            href="product"
                            label="Вся продукция"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default ProductPanel
