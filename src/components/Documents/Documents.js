import React, {Component} from 'react'

import './Documents.css'
import doc from './doc_1.png'

import Line from "../Line";

export default class Documents extends Component {

    render() {
        const {title, text} = this.props[0];

        return (
            <div className="documents pt-5 pb-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row justify-content-around mt-5">
                                <div className="col col-sm-3">
                                    <img src={doc} alt=""/>
                                </div>
                                <div className="col col-sm-3 mb-4">
                                    <img src={doc} alt=""/>
                                </div>
                                <div className="col col-sm-6 pl-4 pr-4">
                                    <h2>{title}</h2>

                                    <Line
                                        color={'var(--dark-text-color)'}
                                        width={'80%'}
                                        x1={0}
                                        x2={'80%'}
                                    />

                                    <p>
                                        {text}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}