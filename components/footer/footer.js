const createFooter = () => {
    let sectionFooter = document.createElement('footer')
    sectionFooter.classList.add('footer')
    sectionFooter.classList.add('main-padding')
    sectionFooter.innerHTML = `
        <div class="footer__top">
        <nav class="footer__site-map">
            <ul class="footer__site-map__item">
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link footer__site-map__item_link_heading" href="#">Додо Пицца</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">О нас</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">Додо-книга</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">Блог "Сила ума"</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">Додо ИС</a></li>
            </ul>
            <ul class="footer__site-map__item">
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link footer__site-map__item_link_heading" href="#">Работа</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">В пиццерии</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">В контакт - центре</a></li>
            </ul>
            <ul class="footer__site-map__item">
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link footer__site-map__item_link_heading" href="#">Партнерам</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">Франшиза</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">Инвестиции</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">Поставщикам</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">Предложить помещение</a></li>
            </ul>
            <ul class="footer__site-map__item">
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link footer__site-map__item_link_heading" href="#">Это интересно</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">Экскурсии и мастер-классы</a></li>
                <li class="footer__site-map__item_text"><a class="footer__site-map__item_link" href="#">Корпоративные заказы</a></li>
            </ul>
        </nav>
        <div class="footer__contacts">
            <div class="footer__contacts_apps">
                <a href="#"><img class="footer__contacts_app" src="./images/google-play.svg" alt="Иконка 'Google Play'"></a>
                <a href="#"><img class="footer__contacts_app" src="./images/apple-store.svg" alt="Иконка 'App Store'"></a>
            </div>
            <div class="footer__contacts_tel">
                <h4 class="footer__heading">8-800-302-00-60</h4>
                <p class="footer__contacts_tel_text">Звонок бесплатный</p>
            </div>
            <p class="footer__contacts_tel_text footer__contacts_tel_email">feedback@dodopizza.com</p>
        </div>
    </div>

    <div class="footer__middle">
        <div class="footer__middle__info">
            <h4 class="footer__heading">1 396 362 874 ₽</h4>
            <p class="footer__middle__info_paragraph">Выручка российской сети в этом месяце. В прошлом — 2 460 305 416 ₽</p>
        </div>
        <div class="footer__middle__info">
            <h4 class="footer__heading">688 пиццерий</h4>
            <p class="footer__middle__info_paragraph">в 14 странах, включая Китай, США и Великобританию</p>
        </div>
    </div>

    <hr>

    <div class="footer__bottom">
        <div class="footer__bottom__main">
            <img class="footer__bottom__main_img" src="./images/Logo_text.svg" alt="Логотип 'ДодоПицца'">
            <p class="footer__middle__info_paragraph hidden">© 2021</p>
        </div>
        <div class="footer__bottom__links">
            <a class="footer__middle__info_paragraph" href="#">Правовая информация</a>
            <a class="footer__middle__info_paragraph" href="#">Калорийность и состав</a>
            <a class="footer__middle__info_paragraph" href="#">Помощь</a>
        </div>
        <div class="footer__socials">
            <a href="#" class="footer__socials-item"><img src="./images/socials/fb.svg"></a>
            <a href="#" class="footer__socials-item"><img src="./images/socials/ok.svg"></a>
            <a href="#" class="footer__socials-item"><img src="./images/socials/inst.svg"></a>
            <a href="#" class="footer__socials-item"><img src="./images/socials/vk.svg"></a>
            <a href="#" class="footer__socials-item"><img src="./images/socials/youtube.svg"></a>
        </div>
    </div>
    `
    return sectionFooter
}

export default createFooter()