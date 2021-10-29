import cardsPizza from "../massiv/pizzaMassiv.js";

let modal = document.createElement('div')
modal.className = 'product-card__container'
modal.classList.add('product-card__container_hidden')
//export
function openPizzaModal(event) {
    modal.classList.remove('product-card__container_hidden');
    let elem = cardsPizza.find(el => el.id === event.currentTarget.id)
    console.log(elem)
    let modalWrapper = document.createElement('div')
    modalWrapper.className = 'product-card'
    modalWrapper.innerHTML = `
        <div class="image__container">
            <img class="product-card__image" src='${elem.img.src}'>
            <img class="product-card__outline" src="images/product-card/Ellipse%206.png">
        </div>
        <div class="main-container">
            <h1 class="product-card__title">${elem.title}</h1>
            <p class="product-card__description">${elem.subtitle}</p>
            <div class="product-card__adds">
            <p class="product-card__add">${elem.description}</p>
<!--            <ul class="product-card__adds">-->
<!--                <li class="product-card__add product-card__add_underlined">Ветчина <img class="product-card__add_delete" src='./images/product-card/delete.svg'>, </li>-->
<!--                <li class="product-card__add"> сыр чеддер, </li>-->
<!--                <li class="product-card__add product-card__add_underlined"> сладкий перец <img class="product-card__add_delete" src='./images/product-card/delete.svg'>, </li>-->
<!--                <li class="product-card__add"> моцарелла, </li>-->
<!--                <li class="product-card__add"> томатный соус, </li>-->
<!--                <li class="product-card__add product-card__add_crossed-out"> чеснок <img class="product-card__add_back" src='./images/product-card/back.svg'>, </li>-->
<!--                <li class="product-card__add product-card__add_underlined"> итальянские травы <img class="product-card__add_delete" src='./images/product-card/delete.svg'> </li>-->
<!--            </ul>-->
            <div>
            <div class="size-container">
                <button class="size__button size__button_M">Маленькая</button>
                <button class="size__button size__button_M size__button_clicked">Средняя</button>
                <button class="size__button size__button_M">Большая</button>
            </div>
            <div class="size-container">
                <button class="size__button size__button_L">Традиционное</button>
                <button class="size__button size__button_L size__button_clicked">Тонкое</button>
            </div>
            <h2 class="adds__title">Добавить в пиццу</h2>
            <div class="ingridients">
                <div class="ingridient-item">
                    <img class="ingridients-item__image" src="./images/product-card/cheese.jpg">
                    <h3 class="ingridients-item__title">Сырный бортик</h3>
                    <p class="ingridients-item__text">599 &#8381;</p>
                </div>
                <div class="ingridient-item">
                    <img class="ingridients-item__image" src="./images/product-card/champinion.jpg">
                    <h3 class="ingridients-item__title">Шампиньоны</h3>
                    <p class="ingridients-item__text">39 &#8381;</p>
                </div>
                <div class="ingridient-item">
                    <img class="ingridients-item__image" src="./images/product-card/chicken.jpg">
                    <h3 class="ingridients-item__title">Цыпленок</h3>
                    <p class="ingridients-item__text">59 &#8381;</p>
                </div>
                <div class="ingridient-item">
                    <img class="ingridients-item__image" src="./images/product-card/brynza.jpg">
                    <h3 class="ingridients-item__title">Брынза</h3>
                    <p class="ingridients-item__text">59 &#8381;</p>
                </div>
                <div class="ingridient-item">
                    <img class="ingridients-item__image" src="./images/product-card/halopeniy.jpg">
                    <h3 class="ingridients-item__title">Острый халопенью</h3>
                    <p class="ingridients-item__text">39 &#8381;</p>
                </div>
                <div class="ingridient-item">
                    <img class="ingridients-item__image" src="./images/product-card/hot_chicken.jpg">
                    <h3 class="ingridients-item__title">Острый цыпленок</h3>
                    <p class="ingridients-item__text">59 &#8381;</p>
                </div>
            </div>
            <button class="product-card__button">Добавить в корзину за ${elem.cost}</button>
            <div class="close-container">
                <img src="./images/product-card/close.svg" class="close-button" <!--onclick="closeModal()"-->>
            </div>
        </div>       
       `
    modal.append(modalWrapper)

}
export default openPizzaModal
