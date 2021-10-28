const createHead = () => {
    let sectionHead = document.createElement('header')
    sectionHead.className = 'header'
    sectionHead.classList.add('main-padding')
    sectionHead.innerHTML =  `
         <div class="header__top">
            <img class="logo" src="./images/logotype-dodo.svg" alt="Логотип">
            <img class="logo logo_mobile" src="./images/logo_mobile.svg" alt="Логотип">
            <div class="header__top-text">
                <p class="header__top-text">8 800 302-00-60</p>
                <p class="main-text_small">Звонок бесплатный</p>
            </div>
        </div>
        <nav class="header__menu">
            <ul class="header__menu__items">
                <li class="header__menu__item"><a class="header__menu__link" href="#pizza">Пицца</a></li>
                <li class="header__menu__item"><a class="header__menu__link" href="#combo">Комбо</a></li>
                <li class="header__menu__item"><a class="header__menu__link" href="#starters">Закуски</a></li>
                <li class="header__menu__item"><a class="header__menu__link" href="#deserts">Десерты</a></li>
                <li class="header__menu__item"><a class="header__menu__link" href="drinks">Напитки</a></li>
                <li class="header__menu__item"><a class="header__menu__link" href="others">Другие товары</a></li>
            </ul>
            <button class="main-button main-button_no-margin" type="submit">Корзина</button>
        </nav>    
    `
    return sectionHead
}

export default createHead()