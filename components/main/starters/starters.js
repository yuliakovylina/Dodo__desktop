import {cardsStarters} from "../../massiv/massiv.js";

export const starters = () => {
    let sectionStarters = document.createElement('section');
    sectionStarters.id = 'starters';
    sectionStarters.className = 'starters-items';
    sectionStarters.innerHTML = `
    <h3 class="heading_3_24px heading_3_24px_hidden main-padding">Закуски</h3>
    `
    let diff = document.createElement('div')
    diff.className = 'main-cards';
    diff.classList.add('main-padding');
    sectionStarters.append(diff);
    for (let i = 0; i < cardsStarters.length; i++) {
        let el = document.createElement('div')
        el.className = 'main-card';
        el.classList.add('main-card_size-XL');
        el.innerHTML += `
                    <div class="main-card__image-wrapper">
                        <img class="main-card__image" src="${cardsStarters[i].img.src}">
                    </div>
                <div class="main-card__text-wrapper">
                    <p class="heading_4_20px">${cardsStarters[i].title}</p>
                    <p class="main-text_small_14_gray main-card__text_small-width">${cardsStarters[i].description}</p>
                    <div class="main-card__bottom">
                        <p class="main-card__text_16">${cardsStarters[i].cost}</p>
                        <button id="${cardsStarters[i].id}" type="button" class="main-button" onclick="">${cardsStarters[i].btn}</button>
                    </div>
                     <button id="${cardsStarters[i].id}" type="button" class="main-button main-button_light button-price">${cardsStarters[i].btnMobile}</button>
                </div>
           `
        diff.append(el)
    } return sectionStarters
}

