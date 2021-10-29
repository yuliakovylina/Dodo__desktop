import {cardsCombo} from "../../massiv/massiv.js";

export const combo = () => {
    let sectionCombo = document.createElement('section');
    sectionCombo.id = 'combo';
    sectionCombo.className = 'combo-items';
    sectionCombo.innerHTML = `
    <h3 class="heading_3_24px heading_3_24px_hidden main-padding">Комбо</h3>
    `
    let diff = document.createElement('div')
    diff.className = 'main-cards';
    diff.classList.add('main-padding');
    sectionCombo.append(diff);
    for (let i = 0; i < cardsCombo.length; i++) {
        let el = document.createElement('div')
        el.className = 'main-card'
        el.classList.add('main-card_size-S')
        el.innerHTML += `
                    <div class="main-card__image-wrapper">
                        <img class="main-card__image" src="${cardsCombo[i].img.src}">
                    </div>
                <div class="main-card__text-wrapper">
                    <p class="heading_4_20px">${cardsCombo[i].title}</p>
                    <p class="main-text_small_14_gray main-card__text_small-width">${cardsCombo[i].description}</p>
                    <div class="main-card__bottom">
                        <p class="main-card__text_16">${cardsCombo[i].cost}</p>
                        <button id="${cardsCombo[i].id}" type="button" class="main-button" onclick="">${cardsCombo[i].btn}</button>
                    </div>
                     <button id="${cardsCombo[i].id}" type="button" class="main-button main-button_light button-price">${cardsCombo[i].btnMobile}</button>
                </div>
           `
        diff.append(el)
    } return sectionCombo
}

