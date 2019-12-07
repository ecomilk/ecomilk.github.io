import React from 'react'

import './AboutUs.css'

import Line from "../Line";

const AboutUsPanel = (props) => {
    const {title, text, img} = props;
    return (
        <div className="about-us-panel pb-sm-5 pt-sm-5" id="about-us-panel">
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col col-md-10">
                        <div className="about-us-container">
                            <div className="row justify-content-sm-around">
                                <div className="col-sm-6">
                                    <div className="image">
                                        <img src={img} alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default AboutUsPanel