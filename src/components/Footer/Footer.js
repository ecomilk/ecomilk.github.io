import React from 'react'

import './Footer.css'

import { ReactComponent as InstagramIcon } from '../../assets/icons/colorful/instagram_colorful.svg'
import { ReactComponent as TelegramIcon } from '../../assets/icons/colorful/telegram_colorful.svg'
import { ReactComponent as ViberIcon } from '../../assets/icons/colorful/viber_colorful.svg'
import visaImg from './assets/Visa/color.svg'
import masterCardImg from './assets/Mastercard/color.svg'
import { Col, Container, Row } from "react-bootstrap";
import { instagram, telegram, viber } from '../../config/external-links'

const Footer = (props) => {

  const { logo, phones, mail } = props;

  const columnItems = [
    {
      id: 'footer-column-1',
      domId: 'contacts',
      title: 'Контактная информация',
      items: [
        {
          id: 1,
          title: 'По вопросам заказа',
          child: phones.map(({ id, href, label }) => (
            <div className="phone-link">
              <a key={`phone-${id}`} href={href}>{label}</a>
            </div>
          ))
        },
        {
          id: 2,
          title: 'По любым вопросам',
          child: [
            { id: 1, value: mail, href: `mailto:${mail}` }
          ].map(item => (
            <div className="email-link">
              <a key={`a-${item.id}`} href={item.href}>{item.value}</a>
            </div>
          ))
        },
        {
          id: 3,
          title: 'Мы принимаем к оплате',
          child: [
            { id: 1, value: { img: visaImg, alt: 'Visa' } },
            { id: 2, value: { img: masterCardImg, alt: 'MasterCard' } }
          ].map(item => (
            <div key={`div-${item.id}`} className="icon">
              <img src={item.value.img} alt={item.value.alt} />
            </div>
          ))
        },
        {
          id: 4,
          title: 'Мы в соц.сетях:',
          child: [
            { id: 0, Icon: InstagramIcon, href: instagram },
            { id: 2, Icon: ViberIcon, href: viber },
            { id: 3, Icon: TelegramIcon, href: telegram },
          ].map(item => (
            <div key={`div-${item.id}`} className="icon">
              <FooterSocialIcon {...item} />
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
        { id: 1, value: 'Продукция', href: '#products' },
        { id: 2, value: 'О нас', href: 'about-us' },
        { id: 3, value: 'Блог', href: '/blog' },
        { id: 4, value: 'Контакты', href: '/contacts' },
        { id: 5, value: 'Обратная связь', href: '#subscribe-form' },
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
        { id: 1, value: 'Как сделать заказ', href: '/faq#how-to-order' },
        { id: 2, value: 'Сертификаты качества', href: '/faq#certificates' },
        { id: 3, value: 'Акции и предложения', href: '/faq#sales' },
      ].map(item => (
        <div key={`div-${item.id}`} className="item">
          <a href={item.href}>{item.value}</a>
        </div>
      ))
    },
  ];

  const footerColumnElements = columnItems.map(column => (
    <Col id={column.domId || ''} key={`col-${column.id}`} sm={12} md={true} lg={true}>
      <h5>{column.title}</h5>
      <div className="item-list">
        {
          column.items
        }
      </div>
    </Col>
  ));

  return (
    <div className="footer">
      <div className="footer-content panel panel-yellow">
        <Container>
          <Row>
            <Col>
              <div className="logo">{logo}</div>
            </Col>
          </Row>
          <Row>
            {
              footerColumnElements
            }
          </Row>
        </Container>
      </div>
      <footer>
        <div>
          <Container>
            <Row>
              <Col>
                <div>ЛПХ «Лiтоуская гаспадыня» © 2015-2020</div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const FooterSocialIcon = ({ href, Icon }) => {
  return (
    <a href={href}
      rel="noopener noreferrer"
      target="_blank">
      <Icon className="svg-shadow" />
    </a>
  )
}