let cardsPizza = [
    {
        img: {
            src: './images/main-card/polovinki.jpg',
            name: 'Изображение',
        },
        title: 'Пицца из половинок',
        description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
        cost: 'от 600 R',
        btn: 'Собрать',
        btnMobile: 'от 600 R',
    },
    {
        img: {
            src: './images/main-card/pepperoni-serce.jpg',
            name: 'Изображение',
        },
        title: 'Пепперони-сердце',
        description: 'Пикантная пепперони, моцарелла, томатный соус',
        cost: 'от 625 R',
        btn: 'Выбрать',
        btnMobile: 'от 625 R;',
    },
    {
        img: {
            src: './images/main-card/pirog-serce.jpg',
            name: 'Изображение',
        },
        title: 'Пирог-сердце',
        description: 'Ананасы, брусника, сгущенное молоко',
        cost: 'от 625 t',
        btn: 'Выбрать',
        btnMobile: 'от 625 &#8381;',
    },
    {
        img: {
            src: './images/main-card/cheese-chedder.jpg',
            name: 'Изображение',
        },
        title: 'Чиззи чеддер',
        description: 'Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус, чеснок, итальянские травы',
        cost: 'от 625 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 625 &#8381;',
    },
    {
        img: {
            src: './images/main-card/ciplenok.jpg',
            name: 'Изображение',
        },
        title: 'Цыпленок блю чиз',
        description: 'Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо',
        cost: 'от 445 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 445 &#8381;',
    },
    {
        img: {
            src: './images/main-card/salmon.jpg',
            name: 'Изображение',
        },
        title: 'Нежный лосось',
        description: 'Лосось, томаты черри, соус песто, моцарелла, соус альфредо',
        cost: 'от 495 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 495 &#8381;',
    },
    {
        img: {
            src: './images/main-card/cheese.jpg',
            name: 'Изображение',
        },
        title: 'Сырная',
        description: 'Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо',
        cost: 'от 245 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 245 &#8381;',
    },
    {
        img: {
            src: './images/main-card/pepperoni.jpg',
            name: 'Изображение',
        },
        title: 'Пепперони фреш',
        description: 'Пикантная пепперони,<br> увеличенная порция моцареллы, томаты, томатный соус',
        cost: 'от 645 &#8381;',
        btn: 'Выбрать',
        btnMobile: 'от 645 &#8381;',
    },
]

let cardsCombo = [
    {
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
function createCard(massive, massiveId, classLength) {
    let el = document.createElement('div')
    el.className = 'main-cards'
    //let el = document.createElement('div')
    for (let i = 0; i < massive.length; i++){
        let card = `
    <div class="main-card, ${classLength}">
         <div class="main-card__image-wrapper">
            <img class="main-card__image" src="${massive[i].img.src}">
         </div>
         <div class="main-card__text-wrapper">
            <p class="heading_4_20px">${massive[i].title}</p>
            <p class="main-text_small_14_gray main-card__text_small-width">${massive[i].description}</p>
            <div class="main-card__bottom">
                <p class="main-card__text_16">${massive[i].cost}</p>
                <button type="button" class="main-button">${massive[i].btn}</button>
            </div>
            <button type="button" class="main-button main-button_light button-price">${massive[i].btnMobile}</button>
         </div>
     </div>
    `
       // let el = document.createElement('div')
       // let el = document.getElementsByClassName('main-cards')
        el.innerHTML += card
        document.getElementById(massiveId).append(el)
    }
}

function createSection() {
}

createCard(cardsPizza, 'pizza-cards', '.main-card_size-S')
createCard(cardsCombo, 'combo-cards', '.main-card_size-S')
createCard(cardsStarters, 'starters-cards', '.main-card_size-XL')
createCard(cardDeserts, 'deserts-cards', '.main-card_size-L')
createCard(cardsDrinks, 'drinks-cards')

