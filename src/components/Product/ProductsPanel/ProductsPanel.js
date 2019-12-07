import React from 'react'

import './ProductsPanel.css'
import Line from "../../Line";
import Button from "../../Button";
import ProductItem from "../ProductItem";

const ProductsPanel = (props) => {

    const {title, productItems = []} = props;

    const productElements = productItems.map(it => (
        <div
            key={`product-item-container-${it.id}`}
            className="col-sm-3 mb-4">
            <ProductItem
                key={`product-item-${it.id}`}
                id={it.id}
                img={it.img}
                title={it.title}
                text={it.text}
            />
        </div>
    ));

    return (
        <div className="products-panel pt-5 pb-5" id="products-panel">
            <div className="container-fluid mt-sm-5 mb-5">
                <div className="row justify-content-md-center">
                    <div className="col col-md-10">
                        <div className="products-container mb-sm-5">
                            <h2>{title}</h2>
                            <div className="row justify-content-start">
                                <div className="col-sm-3">
                                    <div>
                                        <Line/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col col-md-10">
                        <div className="row justify-content-sm-around">
                            {productElements}
                        </div>
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-md-10">
                        <div className="row justify-content-start">
                            <div className="col-sm-3">
                                <div>
                                    <Button
                                        href="product"
                                        label="Вся продукция"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductsPanel
