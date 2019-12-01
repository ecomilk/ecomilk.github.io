import React, {Component} from 'react'

import './AppFooter.css'

import instagramIcon from './assets/Instagram/color.png'
import telegramIcon from './assets/Telegram/color.png'
import viberIcon from './assets/Viber/color.png'
import vkIcon from './assets/VK/color.png'
import visaImg from './assets/Visa/color.png'
import masterCardImg from './assets/Mastercard/color.png'

export default class AppFooter extends Component {

    state = {
        phone: '+375 (29) 138 42 34',
        email: 'cheeser-man@gmail.com'
    };

    render() {

        const {email, phone} = this.state;

        return (
            <div className="app-footer">

                <div className="pt-5">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10">

                                <div className="row justify-content-center pb-5">

                                    <div className="col-sm-4 mb-5 mb-lg-0">
                                        <div>
                                            <h4 className="mb-3 mb-lg-4">По вопросам заказа</h4>
                                            <a href={'tel:' + phone}>{phone}</a>
                                        </div>

                                        <div className="mt-4">
                                            <h6>По любым вопросам</h6>
                                            <a href={'mailto:' + email}>{email}</a>
                                        </div>

                                        <div className="mt-4 mb-2">
                                            <h6>Мы принимаем к оплате:</h6>
                                            <div className="social-icons">
                                                <a href="#">
                                                    <img src={visaImg} alt="visa"/>
                                                </a>
                                                <a href="#" className="ml-2">
                                                    <img src={masterCardImg} alt="masterCard"/>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h6>Мы в соц.сетях:</h6>
                                            <div className="social-icons">
                                                <a href="#">
                                                    <img src={instagramIcon} alt="instagram"/>
                                                </a>
                                                <a href="#" className="ml-2">
                                                    <img src={telegramIcon} alt="telegram"/>
                                                </a>
                                                <a href="#" className="ml-2">
                                                    <img src={viberIcon} alt="viber"/>
                                                </a>
                                                <a href="#" className="ml-2">
                                                    <img src={vkIcon} alt="vk"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 mb-5 mb-lg-0">
                                        <h4 className="mb-3 mb-lg-4">О ферме</h4>
                                        <div className="list">
                                            <span>
                                                <a href="#products">Продукция</a>
                                            </span>
                                            <span>
                                                <a href="#about-us">О нас</a>
                                            </span>
                                            <span>
                                                <a href="/blog">Блог</a>
                                            </span>
                                            <span>
                                                <a href="/contacts">Контакты</a>
                                            </span>
                                            <span>
                                                <a href="#subscribe-form">Обратная связь</a>
                                            </span>
                                        </div>

                                    </div>

                                    <div className="col-sm-4">
                                        <h4 className="mb-3 mb-lg-4">Покупателям</h4>
                                        <div className="list">
                                            <span>
                                                <a href="/faq#how-to-order">Как сделать заказ</a>
                                            </span>
                                            <span>
                                                <a href="/faq#certificates">Сертификаты качества</a>
                                            </span>
                                            <span>
                                                <a href="/faq#sales">Акции и предложения</a>
                                            </span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <footer className="pt-5 pb-5">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <span>Частное фермерское хозяйство</span>
                                <span className="pt-3">«Малочны маёнтак» © 2013-2020</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}