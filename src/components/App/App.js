import React, {Component} from 'react';

import './App.css';

import Header from "../Header/Header";
import AboutUsPanel from "../AboutUsPanel";
import ProductPanel from "../Product/ProductPanel/ProductPanel";
import DocumentPanel from "../DocumentPanel/DocumentPanel";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Footer from "../Footer/Footer";
import BenefitsPanel from "../Benefit/BenefitsPanel";

import AppService from "../../services/AppService";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.appService = new AppService();

        this.state = {

            header: {
                logo: this.appService.getLogo(),
                navLinkItems: this.appService.getNavLinkItems()
            },
            aboutUsPanel: {
                title: this.appService.getAboutUsPanelTitle(),
                text: this.appService.getAboutUsPanelText(),
                img: this.appService.getAboutUsPanelImg(),
            },
            benefitPanel: {
                title: this.appService.getBenefitPanelTitle(),
                benefitItems: this.appService.getBenefitItems()
            },
            productPanel: {
                title: this.appService.getProductPanelTitle(),
                productItems: this.appService.getProductItems()
            },
            documentPanel: {
                title: this.appService.getDocumentPanelTitle(),
                productItems: this.appService.getDocumentPanelText()
            },
            subscribeForm: {
                title: this.appService.getSubscribeFormTitle(),
                productItems: this.appService.getSubscribeFormText(),
                url: this.appService.getSubscribeFormUrl()
            },
            footer: {
                logo: this.appService.getLogo(),
                mail: this.appService.getAppMail(),
                phone: this.appService.getAppPhone(),
            }
        }

    }

    render() {
        const {header, aboutUsPanel, benefitPanel, productPanel, documentPanel, subscribeForm, footer} = this.state;

        return (
            <div className="app">
                <Header
                    logo={header.logo}
                    navLinkItems={header.navLinkItems}
                />
                <AboutUsPanel
                    title={aboutUsPanel.title}
                    text={aboutUsPanel.text}
                    img={aboutUsPanel.img}
                />
                <BenefitsPanel
                    title={benefitPanel.title}
                    benefitItems={benefitPanel.benefitItems}
                />
                <ProductPanel
                    title={productPanel.title}
                    productItems={productPanel.productItems}
                />
                <DocumentPanel
                    title={documentPanel.title}
                    text={documentPanel.text}
                />
                <SubscribeForm
                    title={subscribeForm.title}
                    text={subscribeForm.text}
                    url={subscribeForm.url}
                />
                <Footer
                    logo={footer.logo}
                    phone={footer.phone}
                    mail={footer.mail}
                />
            </div>
        )
    }
}