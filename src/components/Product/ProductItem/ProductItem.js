import React from 'react'

import './ProductItem.css'

const ProductItem = (props) => {

    const {id, img, title, text} = props;
    const href = `product/${id}`;

    return (
        <div className="product-item"
            onClick={() => window.open(href)}>
            <div className="card">
                <img className="card-img-top" src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-secondary">{text}</p>
                    <div className="text-yellow">
                        <a href={href}>Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductItem