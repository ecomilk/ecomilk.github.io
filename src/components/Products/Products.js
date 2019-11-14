import React, {Component} from 'react'

import './Products.css'
import Line from "../Line";
import Button from "../Button";

export default class Products extends Component {
    render() {
        return (
            <div className="products" id="products">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-10">

                            <div className="products-container">
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
                            <div className="col-1">

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-10">

                            <div className="">

                                <ProductItem/>

                            </div>

                        </div>
                        <div className="col-1">

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-10">

                            <div className="">


                                <Button label="Вся продукция"/>
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

const ProductItem = ({url, label, text}) => {
    return (
        <div className="product-item">

        </div>
    )
};