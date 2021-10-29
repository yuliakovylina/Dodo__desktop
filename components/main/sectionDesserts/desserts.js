import {cardDeserts} from "../../massiv/massiv.js";

export const desserts = () => {
    let sectionDesserts = document.createElement('section');
    sectionDesserts.id = 'desserts';
    sectionDesserts.className = 'desserts-items';
    sectionDesserts.innerHTML = `
    <h3 class="heading_3_24px heading_3_24px_hidden main-padding">Десерты</h3>
    `
    let diff = document.createElement('div')
    diff.className = 'main-cards';
    diff.classList.add('main-padding');
    sectionDesserts.append(diff);
    for (let i = 0; i < cardDeserts.length; i++) {
        let el = document.createElement('div')
        el.className = 'main-card';
        el.classList.add('main-card_size-L');
        el.innerHTML += `
                    <div class="main-card__image-wrapper">
                        <img class="main-card__image" src="${cardDeserts[i].img.src}">
                    </div>
                <div class="main-card__text-wrapper">
                    <p class="heading_4_20px">${cardDeserts[i].title}</p>
                    <p class="main-text_small_14_gray main-card__text_small-width">${cardDeserts[i].description}</p>
                    <div class="main-card__bottom">
                        <p class="main-card__text_16">${cardDeserts[i].cost}</p>
                        <button id="${cardDeserts[i].id}" type="button" class="main-button" onclick="">${cardDeserts[i].btn}</button>
                    </div>
                     <button id="${cardDeserts[i].id}" type="button" class="main-button main-button_light button-price">${cardDeserts[i].btnMobile}</button>
                </div>
           `
        diff.append(el)
    } return sectionDesserts
}

