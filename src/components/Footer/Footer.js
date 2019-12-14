import React from 'react'

import './Footer.css'

import instagramIcon from './assets/Instagram/color.svg'
import telegramIcon from './assets/Telegram/color.svg'
import viberIcon from './assets/Viber/color.svg'
import vkIcon from './assets/VK/color.svg'
import visaImg from './assets/Visa/color.svg'
import masterCardImg from './assets/Mastercard/color.svg'
import {Col, Container, Row} from "react-bootstrap";

const Footer = (props) => {

    const {phone, mail} = props;

    const columnItems = [
        {
            id: 'footer-column-1',
            title: 'Контактная информация',
            items: [
                {
                    id: 1, title: 'По вопросам заказа', child: [
                        {id: 1, value: phone, href: `tel:${phone}`}
                    ].map(item => (
                        <a key={`a-${item.id}`} href={item.href}>{item.value}</a>
                    ))
                },
                {
                    id: 2, title: 'По любым вопросам', child: [
                        {id: 1, value: mail, href: `tel:${mail}`}
                    ].map(item => (
                        <a key={`a-${item.id}`} href={item.href}>{item.value}</a>
                    ))
                },
                {
                    id: 3, title: 'Мы принимаем к оплате', child: [
                        {id: 1, value: {img: visaImg, alt: 'Visa'}},
                        {id: 2, value: {img: masterCardImg, alt: 'MasterCard'}}
                    ].map(item => (
                        <div key={`div-${item.id}`} className="icon">
                            <img src={item.value.img} alt={item.value.alt}/>
                        </div>
                    ))
                },
                {
                    id: 4, title: 'Мы в соц.сетях:', child: [
                        {id: 0, value: {img: instagramIcon, alt: 'Instagram'}, href: 'https://vk.com'},
                        {id: 1, value: {img: vkIcon, alt: 'VK'}, href: 'https://instagram.com'},
                        {id: 2, value: {img: viberIcon, alt: 'Viber'}, href: 'https://telegram.com'},
                        {id: 3, value: {img: telegramIcon, alt: 'Telegram'}, href: 'https://viber.com'},
                    ].map(item => (
                        <div key={`div-${item.id}`} className="icon">
                            <a href={item.href}>
                                <img src={item.value.img} alt={item.value.alt}/>
                            </a>
                        </div>
                    ))
                },
            ].map(item => (
                <div key={`div-${item.id}`} className="item">
                    <h6>{item.title}</h6>
                    <div>
                        {
                            item.child
                        }
                    </div>
                </div>
            ))
        },
        {
            id: 'footer-column-2',
            title: 'О ферме',
            items: [
                {id: 1, value: 'Продукция', href: '#products'},
                {id: 2, value: 'О нас', href: 'about-us'},
                {id: 3, value: 'Блог', href: '/blog'},
                {id: 4, value: 'Контакты', href: '/contacts'},
                {id: 5, value: 'Обратная связь', href: '#subscribe-form'},
            ].map(item => (
                <div key={`div-${item.id}`} className="item">
                    <a href={item.href}>{item.value}</a>
                </div>
            ))
        },
        {
            id: 'footer-column-3',
            title: 'Покупателям',
            items: [
                {id: 1, value: 'Как сделать заказ', href: '/faq#how-to-order'},
                {id: 2, value: 'Сертификаты качества', href: '/faq#certificates'},
                {id: 3, value: 'Акции и предложения', href: '/faq#sales'},
            ].map(item => (
                <div key={`div-${item.id}`} className="item">
                    <a href={item.href}>{item.value}</a>
                </div>
            ))
        },
    ];

    const footerColumnElements = columnItems.map(column => (
        <Col key={`col-${column.id}`} sm={12} md={true} lg={true}>
            <h4>{column.title}</h4>
            <div className="item-list">
                {
                    column.items
                }
            </div>
        </Col>
    ));

    return (
        <div className="footer">
            <div className="footer-content">
                <Container>
                    <Row>
                        {
                            footerColumnElements
                        }
                    </Row>
                </Container>
            </div>
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <div>Частное фермерское хозяйство</div>
                            <div>«Малочны маёнтак» © 2013-2020</div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;