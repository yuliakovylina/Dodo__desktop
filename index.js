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
        btnMobile: 'от 625 Р',
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

//
// let cardImg = document.getElementsByClassName('main-card__image')
// let cardDescription = document.getElementsByClassName('main-text_small_14_gray')
// let cardTitle = document.getElementsByClassName('heading_4_20px')
// let btnMain = document.getElementsByClassName('main-button')
// let btnMainCost = document.getElementsByClassName('main-card__text_16')
// let btnMobile = document.getElementsByClassName('button-price')


// let card = document.getElementsByClassName('main-card')
// let imageWrapper = card.getElementsByClassName('main-card__image-wrapper')
// let textWrapper = card.getElementsByClassName('main-card__text-wrapper')
// console.log(card)

// for (let i = 0; i <= 7; i++) {
//     cardImg[i].src = cardsPizza[i].img.src
//     cardImg[i].alt = cardsPizza[i].img.name
//     cardTitle[i].textContent = cardsPizza[i].title
//     cardDescription[i].textContent = cardsPizza[i].description
//     btnMain[i].innerText = cardsPizza[i].btn
//     btnMainCost[i].innerText = cardsPizza[i].cost
 //   btnMobile[i].innerText = cardsPizza[i].btnMobile

 //   document.querySelectorAll('.main-card__image-wrapper')[i].append(cardImg[i])
 //   document.querySelectorAll('.main-card__text-wrapper')[i].prepend(cardDescription[i])
  //  document.querySelectorAll('.main-card__text-wrapper')[i].prepend(cardTitle[i])
  //  document.querySelectorAll('.main-card__bottom')[i].append(btnMainCost[i])
    //document.querySelectorAll('.main-card__bottom')[i].append(btnMain[i])
   // document.querySelectorAll('.main-card__text-wrapper')[i].append(btnMobile[i])


//}
let pizza = document.getElementById('pizza');
let mainCards = pizza.getElementsByClassName('main-cards');


for (let i = 0; i < cardsPizza.length; i++) {
    let mainCards = pizza.getElementsByClassName('main-cards');
    let card = mainCards[i].getElementsByClassName('main-card');

    let imageWrapper = card[i].getElementsByClassName('main-card__image-wrapper');
    let cardImg = imageWrapper[i].getElementsByClassName('main-card__image');


    cardImg[i].src = cardsPizza[i].img.src
    cardImg[i].alt = cardsPizza[i].img.name

    let textWrapper = card[i].getElementsByClassName('main-card__text-wrapper');
    let cardTitle = textWrapper[i].getElementsByClassName('heading_4_20px');
    let cardDescription = textWrapper[i].getElementsByClassName('main-text_small_14_gray');

    cardTitle[i].textContent = cardsPizza[i].title
    cardDescription[i].textContent = cardsPizza[i].description

    let cardBottom = textWrapper[i].getElementsByClassName('main-card__bottom');
    let btnCost = cardBottom[i].getElementsByClassName('main-text_small_16');
    let btnMain = cardBottom[i].querySelector('#button-desktop');
    let btnMobile = textWrapper[i].querySelector('#button-mobile');

    btnCost[i].textContent = cardsPizza[i].cost
    btnMain.textContent = cardsPizza[i].btn
    btnMobile.textContent = cardsPizza[i].btnMobile

    document.getElementsByClassName('main-card')[i].append(cardImg[i]);
    document.getElementsByClassName('main-card')[i].append(cardTitle[i]);
    document.getElementsByClassName('main-card')[i].append(cardDescription[i]);
    document.getElementsByClassName('main-card')[i].append(btnCost[i]);
    document.getElementsByClassName('main-card')[i].append(btnMain);
    document.getElementsByClassName('main-card')[i].append(btnMobile);

    console.log(btnMain)
}



