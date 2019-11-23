import React, {Component} from 'react'

import './Products.css'
import Line from "../Line";
import Button from "../Button";
import ProductItem from "../ProductItem";

import eggImg from './images/eggs.png';
import milk from './images/milk.png';
import honey from './images/honey.png';
import cheese from './images/cheese.png';

export default class Products extends Component {
    render() {
        return (
            <div className="products pt-5 pb-5" id="products">
                <div className="container-fluid mt-sm-5 mb-5">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-10">
                            <div className="products-container mb-sm-5">
                                <div>
                                    <h2>Популярная продукция</h2>
                                </div>

                                <Line
                                    color={'#FFDD1F'}
                                    width={'20vw'}
                                    x1={0}
                                    x2={'20vw'}
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="col col-md-10">
                            <div className="row justify-content-sm-around">
                                <div className="col-sm-3 mb-4">
                                    <ProductItem
                                        imgSrc={eggImg}
                                        title="Яйца куриные С1"
                                        text="Состав: яйца, яйца, яйца"
                                    />
                                </div>
                                <div className="col-sm-3 mb-4">
                                    <ProductItem
                                        imgSrc={milk}
                                        title="Молоко домашнее"
                                        text="Состав: яйца, яйца, яйца"
                                    />
                                </div>
                                <div className="col-sm-3 mb-4">
                                    <ProductItem
                                        imgSrc={honey}
                                        title="Мед пчелиный"
                                        text="Состав: мед, сахар, яйца"
                                    />
                                </div>
                                <div className="col-sm-3 mb-4">
                                    <ProductItem
                                        imgSrc={cheese}
                                        title="Яйца куриные С1"
                                        text="Состав: яйца, яйца, яйца"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row justify-content-md-center mt-5">
                        <div className="col col-md-10">
                            <div className="row justify-content-start">
                                <div className="col-sm-3">
                                    <div>
                                        <Button label="Вся продукция"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
