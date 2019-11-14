import React, {Component} from 'react'

import './AboutUs.css'
import Line from "../Line";

export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-us" id="about-us">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-10">
                            <div className="about-us-container">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="image">

                                            </div>
                                        </div>
                                        <div className="col-6">
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
                                                    <p>
                                                        Соответствующему всем европейским стандартам качества и производительностью 4 тонны сыра в месяц? Непросто, местами очень сложно, но всегда полные веры в то, что мы движемся в правильном направлении. Соответствующему всем европейским стандартам качества и производительностью 4 тонны сыра в месяц? Непросто, местами очень сложно, но всегда полные веры в то, что мы движемся в правильном направлении.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}