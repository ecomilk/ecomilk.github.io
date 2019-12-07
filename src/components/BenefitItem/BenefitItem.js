import React from "react";
import './BenefitItem.css'

const BenefitItem = (props) => {
    const {title, imgSrc} = props;

    return (
        <div className="text-center mb-5 text-secondary">
            <div className="mb-3">
                <img src={imgSrc} alt="Loading.."/>
            </div>

            <h5>{title}</h5>
        </div>
    )
};

export default BenefitItem