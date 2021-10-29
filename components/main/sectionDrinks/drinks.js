import {cardsDrinks} from "../../massiv/massiv.js";

export const drinks = () => {
    let sectionDrinks = document.createElement('section');
    sectionDrinks.id = 'desserts';
    sectionDrinks.className = 'desserts-items';
    sectionDrinks.innerHTML = `
    <h3 class="heading_3_24px heading_3_24px_hidden main-padding">Напитки</h3>
    `
    let diff = document.createElement('div');
    diff.className = 'main-cards';
    diff.classList.add('main-padding');
    sectionDrinks.append(diff);
    for (let i = 0; i < cardsDrinks.length; i++) {
        let el = document.createElement('div')
        el.className = 'main-card';
        el.classList.add('main-card_size-L');
        el.innerHTML += `
                    <div class="main-card__image-wrapper">
                        <img class="main-card__image" src="${cardsDrinks[i].img.src}">
                    </div>
                <div class="main-card__text-wrapper">
                    <p class="heading_4_20px">${cardsDrinks[i].title}</p>
                    <p class="main-text_small_14_gray main-card__text_small-width">${cardsDrinks[i].description}</p>
                    <div class="main-card__bottom">
                        <p class="main-card__text_16">${cardsDrinks[i].cost}</p>
                        <button id="${cardsDrinks[i].id}" type="button" class="main-button" onclick="">${cardsDrinks[i].btn}</button>
                    </div>
                     <button id="${cardsDrinks[i].id}" type="button" class="main-button main-button_light button-price">${cardsDrinks[i].btnMobile}</button>
                </div>
           `
        diff.append(el)
    } return sectionDrinks
}

