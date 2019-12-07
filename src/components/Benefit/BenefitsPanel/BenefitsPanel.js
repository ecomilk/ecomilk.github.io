import React from "react";
import './BenefitsPanel.css'
import Line from "../../Line";
import BenefitItem from "../BenefitItem";

const BenefitsPanel = (props) => {

    const {title, benefitItems = []} = props;

    const benefitElements = benefitItems.map(it => (
        <div
            key={`benefit-item-container-${it.id}`}
            className="col-sm">
            <BenefitItem
                key={`benefit-item-${it.id}`}
                imgSrc={it.img}
                title={it.title}
            />
        </div>
    ));

    return (
        <div className="row justify-content-md-center pt-sm-5">
            <div className="col col-md-10 text-center text-md-left text-lg-left">
                <h2>{title}</h2>

                <div className="row justify-content-start">
                    <div className="col-sm-3">
                        <div>
                            <Line/>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-sm-around mt-5 mb-5">
                    {benefitElements}
                </div>
            </div>
        </div>

    )
};

export default BenefitsPanel