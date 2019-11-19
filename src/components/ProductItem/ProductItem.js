import React from 'react'

import './ProductItem.css'

const ProductItem = (props) => {

    const {imgSrc, title, text} = props;

    return (
        <div className="product-item">
            <div className="card">
                <img className="card-img-top" src={imgSrc}  alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text text-secondary">{text}</p>
                        <span className="text-yellow">Подробнее</span>
                    </div>
            </div>
        </div>
    )
};

export default ProductItem