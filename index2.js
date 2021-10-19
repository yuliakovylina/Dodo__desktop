import {cardsPizza, cardsCombo,cardsStarters, cardDeserts, cardsDrinks} from "./components/massiv/massiv.js";

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////   CREATE CARD   //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

let modal = document.querySelector('.product-card__container')
let button = document.querySelector('.main-button')

function createCard(massive, massiveId, classLength) {
    let el = document.createElement('div')
    el.className = 'main-cards'
    for (let i = 0; i < massive.length; i++){
        el.innerHTML += `
    <div class="main-card ${classLength}">
         <div class="main-card__image-wrapper">
            <img class="main-card__image" src="${massive[i].img.src}">
         </div>
         <div class="main-card__text-wrapper">
            <p class="heading_4_20px">${massive[i].title}</p>
            <p class="main-text_small_14_gray main-card__text_small-width">${massive[i].description}</p>
            <div class="main-card__bottom">
                <p class="main-card__text_16">${massive[i].cost}</p>
                <button id="${massive[i].id}" type="button" class="main-button" onclick="openPizzaModal(event)">${massive[i].btn}</button>
            </div>
            <button id="${massive[i].id}" type="button" class="main-button main-button_light button-price">${massive[i].btnMobile}</button>
         </div>
     </div>
    `
    }
    document.getElementById(massiveId).append(el)
}

// function createModal(event) {
//     let elem = cardsPizza.find (el => el.id === event.currentTarget.id)
//     console.log(elem)
//     let modalWrapper = document.createElement('div')
//     modalWrapper.className = 'product-card'
//     modalWrapper.innerHTML = `
//         <div class="image__container">
//             <img class="product-card__image" src='${elem.img.src}'>
//             <img class="product-card__outline" src="images/product-card/Ellipse%206.png">
//         </div>
//         <div class="main-container">
//             <h1 class="product-card__title">${elem.title}</h1>
//             <p class="product-card__description">${elem.subtitle}</p>
//             <div class="product-card__adds">
//             <p class="product-card__add">${elem.description}</p>
// <!--            <ul class="product-card__adds">-->
// <!--                <li class="product-card__add product-card__add_underlined">Ветчина <img class="product-card__add_delete" src='./images/product-card/delete.svg'>, </li>-->
// <!--                <li class="product-card__add"> сыр чеддер, </li>-->
// <!--                <li class="product-card__add product-card__add_underlined"> сладкий перец <img class="product-card__add_delete" src='./images/product-card/delete.svg'>, </li>-->
// <!--                <li class="product-card__add"> моцарелла, </li>-->
// <!--                <li class="product-card__add"> томатный соус, </li>-->
// <!--                <li class="product-card__add product-card__add_crossed-out"> чеснок <img class="product-card__add_back" src='./images/product-card/back.svg'>, </li>-->
// <!--                <li class="product-card__add product-card__add_underlined"> итальянские травы <img class="product-card__add_delete" src='./images/product-card/delete.svg'> </li>-->
// <!--            </ul>-->
//             <div>
//             <div class="size-container">
//                 <button class="size__button size__button_M">Маленькая</button>
//                 <button class="size__button size__button_M size__button_clicked">Средняя</button>
//                 <button class="size__button size__button_M">Большая</button>
//             </div>
//             <div class="size-container">
//                 <button class="size__button size__button_L">Традиционное</button>
//                 <button class="size__button size__button_L size__button_clicked">Тонкое</button>
//             </div>
//             <h2 class="adds__title">Добавить в пиццу</h2>
//             <div class="ingridients">
//                 <div class="ingridient-item">
//                     <img class="ingridients-item__image" src="./images/product-card/cheese.jpg">
//                     <h3 class="ingridients-item__title">Сырный бортик</h3>
//                     <p class="ingridients-item__text">599 &#8381;</p>
//                 </div>
//                 <div class="ingridient-item">
//                     <img class="ingridients-item__image" src="./images/product-card/champinion.jpg">
//                     <h3 class="ingridients-item__title">Шампиньоны</h3>
//                     <p class="ingridients-item__text">39 &#8381;</p>
//                 </div>
//                 <div class="ingridient-item">
//                     <img class="ingridients-item__image" src="./images/product-card/chicken.jpg">
//                     <h3 class="ingridients-item__title">Цыпленок</h3>
//                     <p class="ingridients-item__text">59 &#8381;</p>
//                 </div>
//                 <div class="ingridient-item">
//                     <img class="ingridients-item__image" src="./images/product-card/brynza.jpg">
//                     <h3 class="ingridients-item__title">Брынза</h3>
//                     <p class="ingridients-item__text">59 &#8381;</p>
//                 </div>
//                 <div class="ingridient-item">
//                     <img class="ingridients-item__image" src="./images/product-card/halopeniy.jpg">
//                     <h3 class="ingridients-item__title">Острый халопенью</h3>
//                     <p class="ingridients-item__text">39 &#8381;</p>
//                 </div>
//                 <div class="ingridient-item">
//                     <img class="ingridients-item__image" src="./images/product-card/hot_chicken.jpg">
//                     <h3 class="ingridients-item__title">Острый цыпленок</h3>
//                     <p class="ingridients-item__text">59 &#8381;</p>
//                 </div>
//             </div>
//             <button class="product-card__button">Добавить в корзину за 625 &#8381;</button>
//             <div class="close-container">
//                 <img src="./images/product-card/close.svg" class="close-button" onclick="closeModal()">
//             </div>
//         </div>
//        `
//     document.querySelector('.product-card__container').append(modalWrapper)

function openPizzaModal(event) {
    modal.classList.remove('product-card__container_hidden')
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
                <img src="./images/product-card/close.svg" class="close-button" onclick="closeModal()">
            </div>
        </div>       
       `
    document.querySelector('.product-card__container').append(modalWrapper)
}

function openModal(event) {
    modal.classList.remove('product-card__container_hidden')
    let array = cardsCombo.concat(cardsStarters + cardsDrinks + cardDeserts)
    let elem = array.id.find(el => el.id === event.currentTarget.id)
    console.log(elem)
    let modalWrapper = document.createElement('div')
    modalWrapper.className = 'product-card'
    modalWrapper.innerHTML = `
        <div class="image__container">
        <img class="product-card__image" src='${elem.img.src}>
    </div>
    <div class="main-container">
        <h1 class="product-card__title">${elem.title}</h1>
        <p class="product-card__description">16 шт</p>
        <p class="product-card__description">${elem.subtitle}</p>
        <button class="product-card__button">Добавить в корзину за ${elem.cost}</button>
    </div>
    <div class="close-container">
        <img src="./images/product-card/close.svg" class="close-button">
    </div>
       `
    document.querySelector('.product-card__container').append(modalWrapper)
}

function  closeModal() {
    modal.classList.add('product-card__container_hidden')
}

// closeButton.addEventListener('click', closeModal)

createCard(cardsPizza, 'pizza-cards', 'main-card_size-S')
createCard(cardsCombo, 'combo-cards', 'main-card_size-S')
createCard(cardsStarters, 'starters-cards', 'main-card_size-XL')
createCard(cardDeserts, 'deserts-cards', 'main-card_size-L')
createCard(cardsDrinks, 'drinks-cards', 'main-card_size-M')

