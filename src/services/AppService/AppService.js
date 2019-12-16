import eggsImg from "../../assets/Products/ProductItem/eggs.png";
import milkImg from "../../assets/Products/ProductItem/milk.png";
import honeyImg from "../../assets/Products/ProductItem/honey.png";
import cheeseImg from "../../assets/Products/ProductItem/cheese.png";
import cowHeadSvg from "../../assets/Benefit/BenefitItem/cow-head.svg";
import ecologySvg from "../../assets/Benefit/BenefitItem/ecology.svg";
import plantSvg from "../../assets/Benefit/BenefitItem/plant.svg";
import charitySvg from "../../assets/Benefit/BenefitItem/charity.svg";
import imgAboutUs from "../../assets/AboutUsPanel/4.jpg";

export default class AppService {

    getProductItems = () => [
        {id: 0, title: 'Яйца куриные С1', text: 'Состав: яйца куриные', img: eggsImg},
        {id: 1, title: 'Молоко домашнее', text: 'Состав: молоко', img: milkImg},
        {id: 2, title: 'Мед пчелиный', text: 'Состав: мед, сахар', img: honeyImg},
        {id: 3, title: 'Сыр деревенский', text: 'Состав: сыр мягкий', img: cheeseImg}
    ];

    getBenefitPanelTitle = () => 'Наши преимущества';

    getBenefitItems = () => [
        {id: 0, title: 'Только свежие продукты', img: cowHeadSvg},
        {id: 1, title: 'Без ГМО', img: ecologySvg},
        {id: 2, title: 'Сертификаты качества', img: plantSvg},
        {id: 3, title: 'Сделано с любовью', img: charitySvg},
    ];

    getNavLinkItems = () => [
        {id: 'a-about-us', label: 'О нас', href: '#about-us-panel'},
        {id: 'a-products', label: 'Продукция', href: '#product-panel'},
        {id: 'a-how-to-purchase', label: 'Как заказать', href: '#how-to-purchase'},
        {id: 'a-blog', label: 'Блог', href: '#blog'},
        {id: 'a-contacts', label: 'Контакты', href: '#contacts'}
    ];

    getAboutUsPanelTitle = () => 'Кто мы такие?';

    getAboutUsPanelText = () => 'Соответствующему всем европейским стандартам качества и ' +
        'производительностью 4 тонны сыра в месяц? Непросто, местами очень ' +
        'сложно, но всегда полные веры в то, что мы движемся в правильном ' +
        'направлении. Соответствующему всем европейским стандартам качества и ' +
        'производительностью 4 тонны сыра в месяц? Непросто, местами очень ' +
        'сложно, но всегда полные веры в то, что мы движемся в правильном ' +
        'направлении.';

    getAboutUsPanelImg = () => imgAboutUs;

    getProductPanelTitle = () => 'Популярная продукция';

    getLogo = () => 'CHEESER';

    getAppPhone = () => '+375291234567';

    getAppMail = () => 'cheeser@gmail.com';

    getDocumentPanelTitle = () => 'Документация и сертификаты качества';

    getDocumentPanelText = () => 'Соответствующему всем европейским стандартам качества и производительностью 4 тонны сыра в месяц? ' +
        'Непросто, местами очень сложно, но всегда полные веры в то, что мы движемся в правильном направлении. ' +
        'Соответствующему всем европейским стандартам качества и производительностью 4 тонны сыра в месяц?';

    getSubscribeFormTitle = () => 'Подписаться на рассылку';

    getSubscribeFormText = () => 'Подпишитесь, чтобы быть в курсе последних предложений и акций';

    getSubscribeFormUrl = () => 'api/subscribe';
}