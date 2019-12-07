import React, {Component} from 'react';

import './App.css';

import AppHeader from "../AppHeader/AppHeader";
import AboutUsPanel from "../AboutUs";
import ProductsPanel from "../ProductsPanel/ProductsPanel";
import Documents from "../Documents/Documents";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import AppFooter from "../AppFooter/AppFooter";
import BenefitsPanel from "../Benefit/BenefitsPanel";

import imgAboutUs from '../../assets/AboutUsPanel/about-us.png'

import charitySvg from '../../assets/Benefit/BenefitItem/charity.svg'
import cowHeadSvg from '../../assets/Benefit/BenefitItem/cow-head.svg'
import ecologySvg from '../../assets/Benefit/BenefitItem/ecology.svg'
import plantSvg from '../../assets/Benefit/BenefitItem/plant.svg'

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

            navListItems: [
                {key: 'about-us', label: 'О Нас', target: '#about-us'},
                {key: 'products', label: 'Продукция', target: '#products'},
                {key: 'how-to-order', label: 'Как заказать', target: '#how-to-order'},
                {key: 'blog', label: 'Блог', target: '#blog'},
                {key: 'contacts', label: 'Контакты', target: '#contacts'},
            ],

            sections: [
                {
                    id: 4,
                    name: 'documents',
                    title: 'Документация и сертификаты качества',
                    text: 'Соответствующему всем европейским стандартам качества и производительностью 4 тонны сыра в месяц? Непросто, местами очень сложно, но всегда полные веры в то, что мы движемся в правильном направлении. Соответствующему всем европейским стандартам качества и производительностью 4 тонны сыра в месяц?',
                    images: [
                        {id: 0, src: ''}
                    ]
                },
                {
                    id: 4,
                    name: 'subscribeForm',
                    url: 'api/subscribe'
                }
            ]
        }
    }

    render() {

        const {sections} = this.state;

        const documentsProps = sections.filter(it => it.name === 'documents');
        const subscribeFormProps = sections.filter(it => it.name === 'subscribeForm');

        return (
            <div className="app">
                <AppHeader/>
                <AboutUsPanel
                    title={aboutUsProps.title}
                    text={aboutUsProps.text}
                    img={aboutUsProps.img}
                />
                <BenefitsPanel
                    title={benefitsPanelProps.title}
                    benefitItems={getBenefitItems()}
                />
                <ProductsPanel/>
                <Documents {...documentsProps} />
                <SubscribeForm {...subscribeFormProps} />
                <AppFooter/>
            </div>
        )
    }
}

const getBenefitItems = () => {
    return [
        {id: 0, title: 'Только свежие продукты', img: cowHeadSvg},
        {id: 1, title: 'Без ГМО', img: ecologySvg},
        {id: 2, title: 'Сертификаты качества', img: plantSvg},
        {id: 3, title: 'Сделано с любовью', img: charitySvg},
    ]
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


