import React, {Component} from 'react'

import './AboutUs.css'
import imgAboutUs from './images/about-us.png'
import charitySvg from './images/charity.svg'
import cowHeadSvg from './images/cow-head.svg'
import ecologySvg from './images/ecology.svg'
import plantSvg from './images/plant.svg'

import Line from "../Line";

export default class AboutUs extends Component {

    render() {
        return (
            <div className="about-us pb-5 pt-5" id="about-us">
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-10">
                            <div className="about-us-container">
                                <div className="row justify-content-sm-around">
                                    <div className="col-sm-6">
                                        <div className="image">
                                            <img src={imgAboutUs} alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="content">
                                            <div>
                                                <h2>Кто мы такие?</h2>
                                            </div>
                                            <Line
                                                color={'#FFDD1F'}
                                                width={'20vw'}
                                                x1={0}
                                                x2={'20vw'}
                                            />
                                            <div>
                                                <p className="text-secondary">
                                                    Соответствующему всем европейским стандартам качества и
                                                    производительностью 4 тонны сыра в месяц? Непросто, местами очень
                                                    сложно, но всегда полные веры в то, что мы движемся в правильном
                                                    направлении. Соответствующему всем европейским стандартам качества и
                                                    производительностью 4 тонны сыра в месяц? Непросто, местами очень
                                                    сложно, но всегда полные веры в то, что мы движемся в правильном
                                                    направлении.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center mt-5">
                        <div className="col col-md-10">
                            <h2>Преимущества</h2>

                            <Line
                                color={'#FFDD1F'}
                                width={'20vw'}
                                x1={0}
                                x2={'20vw'}
                            />

                            <div className="row justify-content-sm-around mt-5 mb-5">
                                <div className="col-sm">
                                    <Advantage
                                        imgSrc={cowHeadSvg}
                                        title="Только свежие продукты"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Advantage
                                        imgSrc={ecologySvg}
                                        title="Без ГМО"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Advantage
                                        imgSrc={plantSvg}
                                        title="Сертификаты качества"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Advantage
                                        imgSrc={charitySvg}
                                        title="Сделано с любовью"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Advantage = (props) => {
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