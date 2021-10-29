import cardsPizza from "../../massiv/pizzaMassiv.js";
//import openPizzaModal from "../../modal/modalSizeBig";

export const pizza = () => {
    let sectionPizza = document.createElement('section');
    sectionPizza.id = 'pizza';
    sectionPizza.className = 'pizza-items';
    sectionPizza.innerHTML = `
    <h3 class="heading_3_24px heading_3_24px_hidden main-padding">Пицца</h3>
    `
    let diff = document.createElement('div')
    diff.className = 'main-cards';
    diff.classList.add('main-padding');
    sectionPizza.append(diff);
    for(let i = 0; i < cardsPizza.length; i++) {
        let el = document.createElement('div')
        el.className = 'main-card'
        el.classList.add('main-card_size-S')
        el.innerHTML = `
                    <div class="main-card__image-wrapper">
                        <img class="main-card__image" src="${cardsPizza[i].img.src}">
                    </div>
                <div class="main-card__text-wrapper">
                    <p class="heading_4_20px">${cardsPizza[i].title}</p>
                    <p class="main-text_small_14_gray main-card__text_small-width">${cardsPizza[i].description}</p>
                    <div class="main-card__bottom">
                        <p class="main-card__text_16">${cardsPizza[i].cost}</p>
                        <button id="${cardsPizza[i].id}" type="button" class="main-button" onclick="">${cardsPizza[i].btn}</button>
                    </div>
                     <button id="${cardsPizza[i].id}" type="button" class="main-button main-button_light button-price">${cardsPizza[i].btnMobile}</button>
                </div>
           `

        diff.append(el)
    } return sectionPizza
}

