import React from 'react'

import './ProductsPanel.css'
import Line from "../../Line";
import Button from "../../Button";
import ProductItem from "../ProductItem";
import {Col, Container, Row} from "react-bootstrap";

const ProductsPanel = (props) => {

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
        <div className="products-panel pt-5 pb-5" id="products-panel">
            <Container className="mt-sm-5 mb-5">
                <Row>
                    <Col sm={12} md={true} lg={true}>
                        <div className="products-container mb-sm-5">
                            <h2>{title}</h2>
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

export default ProductsPanel
