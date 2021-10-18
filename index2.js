let cardsPizza = [
    {   id: 'Pizza01',
        img: {
            src: './images/main-card/polovinki.jpg',
            name: 'Изображение',
        },
        title: 'Пицца из половинок',
        subtitle: '30 см, традиционное тесто, 480 г',
        description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
        cost: 'от 600 &#8381;',
        btn: 'Собрать',
        btnMobile: 'от 600 R',
    },
    {
        id: 'Pizza02',
        img: {
            src: './images/main-card/pepperoni-serce.jpg',
            name: 'Изображение',
        },
        title: 'Пепперони-сердце',
        subtitle: '30 см, традиционное тесто, 480 г',
        description: 'Пикантная пепперони, моцарелла, томатный соус',
        cost: 'от 625 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 625 R;',
    },
    {
        id: 'Pizza03',
        img: {
            src: './images/main-card/pirog-serce.jpg',
            name: 'Изображение',
        },
        title: 'Пирог-сердце',
        subtitle: '30 см, традиционное тесто, 480 г',
        description: 'Ананасы, брусника, сгущенное молоко',
        cost: 'от 625 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 625 &#8381;',
    },
    {
        id: 'Pizza04',
        img: {
            src: './images/main-card/cheese-chedder.jpg',
            name: 'Изображение',
        },
        title: 'Чиззи чеддер',
        subtitle: '30 см, традиционное тесто, 480 г',
        description: 'Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус, чеснок, итальянские травы',
        cost: 'от 625 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 625 &#8381;',
    },
    {
        id: 'Pizza05',
        img: {
            src: './images/main-card/ciplenok.jpg',
            name: 'Изображение',
        },
        title: 'Цыпленок блю чиз',
        subtitle: '30 см, традиционное тесто, 480 г',
        description: 'Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо',
        cost: 'от 445 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 445 &#8381;',
    },
    {
        id: 'Pizza06',
        img: {
            src: './images/main-card/salmon.jpg',
            name: 'Изображение',
        },
        title: 'Нежный лосось',
        subtitle: '30 см, традиционное тесто, 480 г',
        description: 'Лосось, томаты черри, соус песто, моцарелла, соус альфредо',
        cost: 'от 495 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 495 &#8381;',
    },
    {
        id: 'Pizza07',
        img: {
            src: './images/main-card/cheese.jpg',
            name: 'Изображение',
        },
        title: 'Сырная',
        subtitle: '30 см, традиционное тесто, 480 г',
        description: 'Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо',
        cost: 'от 245 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 245 &#8381;',
    },
    {
        id: 'Pizza08',
        img: {
            src: './images/main-card/pepperoni.jpg',
            name: 'Изображение',
        },
        title: 'Пепперони фреш',
        subtitle: '30 см, традиционное тесто, 480 г',
        description: 'Пикантная пепперони,<br> увеличенная порция моцареллы, томаты, томатный соус',
        cost: 'от 645 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 645 &#8381;',
    },
]

let cardsCombo = [
    {
        id: 'Combo01',
        img: {
            src: './images/combo.jpg',
            name: 'Изображение',
        },
        title: 'Комбо за 599 &#8381;',
        description: 'Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус.',
        cost: 'от 600 &#8381;',
        btn: 'Собрать',
        btnMobile: '599 &#8381;',
    },
    {
        id: 'Combo02',
        img: {
            src: './images/combo.jpg',
            name: 'Изображение',
        },
        title: '2 пиццы',
        description: 'Самое поулярное комбо из 2 пицц 30см. Большой выбор',
        cost: 'от 899 &#8381;',
        btn: 'Собрать',
        btnMobile: '899 &#8381;',
    },
    {
        id: 'Combo03',
        img: {
            src: './images/combo.jpg',
            name: 'Изображение',
        },
        title: '2 пиццы и закуска',
        description: '2 пиццы 25 см и закуска на выбор. Для компании из 2–4 человек',
        cost: 'от 625 &#8381;',
        btn: 'Собрать',
        btnMobile: '749 &#8381;',
    },
    {
        id: 'Combo04',
        img: {
            src: './images/combo.jpg',
            name: 'Изображение',
        },
        title: 'Пицца и 2 закуски',
        description: 'Пицца 30 см и 2 закуски на выбор. Для компании из 2–4 человек',
        cost: 'от 625 &#8381;',
        btn: 'Собрать',
        btnMobile: '449 &#8381;',
    },
    {
        id: 'Combo05',
        img: {
            src: './images/combo.jpg',
            name: 'Изображение',
        },
        title: 'Комбо за 999 &#8381;',
        description: '3 пиццы 30 см на тонком тесте по суперцене. Выбор пицц ограничен',
        cost: 'от 445 &#8381;',
        btn: 'Собрать',
        btnMobile: '799 &#8381;',
    },
]

let cardsStarters = [
    {
        id: 'Starters01',
        img: {
            src: './images/starters/soup.jpg',
            name: 'Изображение',
        },
        title: 'Томатный суп с гренками',
        description: 'Горячий суп с пшеничными гренками на основе фирменного соуса из итальянских томатов',
        cost: '99 &#8381;',
        btn: 'В корзину',
        btnMobile: '99 &#8381;',
    },
    {
        id: 'Starters02',
        img: {
            src: './images/starters/soup.jpg',
            name: 'Изображение',
        },
        title: 'Томатный суп с митболами',
        description: 'Горячий суп c митболами из говядины и маслинами на основе фирменного соуса из итальянских томатов',
        cost: '149 &#8381;',
        btn: 'В корзину',
        btnMobile: '149 &#8381;',
    },
    {
        id: 'Starters03',
        img: {
            src: './images/starters/dodster.jpg',
            name: 'Изображение',
        },
        title: 'Додстер',
        description: 'Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
        cost: '159 &#8381;',
        btn: 'В корзину',
        btnMobile: '159 &#8381;',
    },
    {
        id: 'Starters04',
        img: {
            src: './images/starters/dodster-hot.jpg',
            name: 'Изображение',
        },
        title: 'Острый Додстер',
        description: 'Горячая закуска с острым цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке',
        cost: '159 &#8381;',
        btn: 'В корзину',
        btnMobile: '159 &#8381;',
    },
    {
        id: 'Starters05',
        img: {
            src: './images/starters/dodster-chipotle.jpg',
            name: 'Изображение',
        },
        title: 'Додстер Чипотле',
        description: 'Горячая закуска с пикантным соусом чипотле из копченых перчиков, цыпленком, томатами, моцареллой в тонкой пшеничной лепешке',
        cost: '159 &#8381;',
        btn: 'В корзину',
        btnMobile: '159 &#8381;',
    },
]

let cardDeserts = [
    {
        id: 'Deserts01',
        img: {
            src: './images/desserts/apple-pie.jpg',
            name: 'Изображение',
        },
        title: 'Яблочный пирог',
        description: 'Десерт из песочного теста с яблочной начинкой. Может содержать изюм',
        cost: '99 &#8381;',
        btn: 'В корзину',
        btnMobile: '99 &#8381;',
    },
    {
        id: 'Deserts02',
        img: {
            src: './images/desserts/cheesecake.jpg',
            name: 'Изображение',
        },
        title: 'Чизкейк Нью-Йорк',
        description: 'Классический американский творожный десерт',
        cost: '149 &#8381;',
        btn: 'В корзину',
        btnMobile: '149 &#8381;',
    },
    {
        id: 'Deserts03',
        img: {
            src: './images/desserts/fondan.jpg',
            name: 'Изображение',
        },
        title: 'Фонданы, 2 шт',
        description: 'Два десерта с хрустящей корочкой и топлёной шоколадной начинкой',
        cost: '159 &#8381;',
        btn: 'В корзину',
        btnMobile: '159 &#8381;',
    },
    {
        id: 'Deserts04',
        img: {
            src: './images/desserts/milkshake.jpg',
            name: 'Изображение',
        },
        title: 'Молочный коктейль с печеньем Орео',
        description: 'Напиток из молока и мороженого с добавлением дробленого печенья «Орео»',
        cost: '159 &#8381;',
        btn: 'В корзину',
        btnMobile: '159 &#8381;',
    },
    {
        id: 'Deserts05',
        img: {
            src: './images/desserts/milkshake.jpg',
            name: 'Изображение',
        },
        title: 'Классический молочный коктейль',
        description: 'Напиток из молока и мороженого',
        cost: '159 &#8381;',
        btn: 'В корзину',
        btnMobile: '159 &#8381;',
    },
]

let cardsDrinks = [
    {
        id: 'Drinks01',
        img: {
            src: './images/drinks/1.jpg',
            name: 'Изображение',
        },
        title: '2 Coca-Cola по суперцене',
        description: 'Две классические Coca-Cola по 0,5 литров по выгодной цене, 0,5 л',
        cost: '99 &#8381;',
        btn: 'В корзину',
        btnMobile: '99 &#8381;',
    },
    {
        id: 'Drinks01',
        img: {
            src: './images/drinks/2.jpg',
            name: 'Изображение',
        },
        title: 'Coca-Cola Orange',
        description: '0,5 л',
        cost: '149 &#8381;',
        btn: 'В корзину',
        btnMobile: '149 &#8381;',
    },
    {
        id: 'Drinks01',
        img: {
            src: './images/drinks/3.jpg',
            name: 'Изображение',
        },
        title: 'Coca-Cola Zero',
        description: '0,5 л',
        cost: '159 &#8381;',
        btn: 'В корзину',
        btnMobile: '159 &#8381;',
    },
    {
        id: 'Drinks01',
        img: {
            src: './images/drinks/4.jpg',
            name: 'Изображение',
        },
        title: 'Coca-Cola',
        description: '0,5 л',
        cost: '159 &#8381;',
        btn: 'В корзину',
        btnMobile: '159 &#8381;',
    },
    {
        id: 'Drinks01',
        img: {
            src: './images/drinks/5.jpg',
            name: 'Изображение',
        },
        title: 'Coca-Cola Vanilla',
        description: '0,5 л',
        cost: '159 &#8381;',
        btn: 'В корзину',
        btnMobile: '159 &#8381;',
    },
]
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////   CREATE CARD   //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////


function createCard(massive, massiveId, classLength, ) {
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
                <button id="${massive[i].id}" type="button" class="main-button" onclick="openModal(event)">${massive[i].btn}</button>
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

let modal = document.querySelector('.product-card__container')

function openModal(event) {
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
            <button class="product-card__button">Добавить в корзину за 625 &#8381;</button>
            <div class="close-container">
                <img src="./images/product-card/close.svg" class="close-button" onclick="closeModal()">
            </div>
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

