import React, {Component} from 'react';

import './App.css';

import Header from "../Header/Header";
import AboutUsPanel from "../AboutUsPanel";
import ProductPanel from "../Product/ProductPanel/ProductPanel";
import DocumentPanel from "../DocumentPanel/DocumentPanel";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Footer from "../Footer/Footer";
import BenefitsPanel from "../Benefit/BenefitsPanel";

import imgAboutUs from '../../assets/AboutUsPanel/about-us.png'

import charitySvg from '../../assets/Benefit/BenefitItem/charity.svg'
import cowHeadSvg from '../../assets/Benefit/BenefitItem/cow-head.svg'
import ecologySvg from '../../assets/Benefit/BenefitItem/ecology.svg'
import plantSvg from '../../assets/Benefit/BenefitItem/plant.svg'

import cheeseImg from '../../assets/Products/ProductItem/cheese.png'
import eggsImg from '../../assets/Products/ProductItem/eggs.png'
import honeyImg from '../../assets/Products/ProductItem/honey.png'
import milkImg from '../../assets/Products/ProductItem/milk.png'

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <Header
                    logo={getLogo()}
                    navLinkItems={getNavLinkItems()}
                />
                <AboutUsPanel
                    title={aboutUsProps.title}
                    text={aboutUsProps.text}
                    img={aboutUsProps.img}
                />
                <BenefitsPanel
                    title={benefitsPanelProps.title}
                    benefitItems={getBenefitItems()}
                />
                <ProductPanel
                    title={getProductPanelTitle()}
                    productItems={getProductItems()}
                />
                <DocumentPanel
                    title={documentPanelProps.title}
                    text={documentPanelProps.text}
                />
                <SubscribeForm
                    title="Подписаться на рассылку"
                    text="Подпишитесь, чтобы быть в курсе последних предложений и акций"
                    name={subscribeFormProps.name}
                    url={subscribeFormProps.url}
                />
                <Footer
                    logo={footerProps.logo}
                    phone={footerProps.phone}
                    mail={footerProps.mail}
                />
            </div>
        )
    }
}

const getProductItems = () => {
    return [
        {id: 0, title: 'Яйца куриные С1', text: 'Состав: яйца куриные', img: eggsImg},
        {id: 1, title: 'Молоко домашнее', text: 'Состав: молоко', img: milkImg},
        {id: 2, title: 'Мед пчелиный', text: 'Состав: мед, сахар', img: honeyImg},
        {id: 3, title: 'Сыр деревенский', text: 'Состав: сыр мягкий', img: cheeseImg}
    ]
};

const getBenefitItems = () => {
    return [
        {id: 0, title: 'Только свежие продукты', img: cowHeadSvg},
        {id: 1, title: 'Без ГМО', img: ecologySvg},
        {id: 2, title: 'Сертификаты качества', img: plantSvg},
        {id: 3, title: 'Сделано с любовью', img: charitySvg},
    ]
};

const getNavLinkItems = () => {
    return [
        {id: 'a-about-us', label: 'О нас', href: '#about-us-panel'},
        {id: 'a-products', label: 'Продукция', href: '#product-panel'},
        {id: 'a-how-to-purchase', label: 'Как заказать', href: '#how-to-purchase'},
        {id: 'a-blog', label: 'Блог', href: '#blog'},
        {id: 'a-contacts', label: 'Контакты', href: '#contacts'}
    ];
};

const aboutUsProps = {
    title: 'Кто мы такие?',
    text: 'Соответствующему всем европейским стандартам качества и ' +
        'производительностью 4 тонны сыра в месяц? Непросто, местами очень ' +
        'сложно, но всегда полные веры в то, что мы движемся в правильном ' +
        'направлении. Соответствующему всем европейским стандартам качества и ' +
        'производительностью 4 тонны сыра в месяц? Непросто, местами очень ' +
        'сложно, но всегда полные веры в то, что мы движемся в правильном ' +
        'направлении.',
    img: imgAboutUs
};

const benefitsPanelProps = {
    title: 'Преимущества',
    benefitItems: getBenefitItems()
};

const productsPanelProps = {
    title: 'Популярная продукция',
    productItems: getProductItems()
};

const getProductPanelTitle = () => {
    return 'Популярная продукция'
};

const getLogo = () => {
    return 'CHEESER'
};

const footerProps = {
    logo: 'CHEESER',
    phone: "+375291234567",
    mail: "cheeser@gmail.com"
};

const documentPanelProps = {
    title: 'Документация и сертификаты качества',
    text: 'Соответствующему всем европейским стандартам качества и производительностью 4 тонны сыра в месяц? ' +
        'Непросто, местами очень сложно, но всегда полные веры в то, что мы движемся в правильном направлении. ' +
        'Соответствующему всем европейским стандартам качества и производительностью 4 тонны сыра в месяц?',
};

const subscribeFormProps = {
    name: 'subscribeForm',
    url: 'api/subscribe'
};


