import cardsPizza from "../../massiv/pizzaMassiv.js";
import {createCard} from "../card/createCard.js";

export const pizza = () => {
    let sectionPizza = document.createElement('section');
    sectionPizza.id = 'pizza';
    sectionPizza.className = 'pizza-items';
    sectionPizza.innerHTML = createCard(cardsPizza, 'pizza-cards', 'main-card_size-S');
    console.log(createCard(cardsPizza, 'pizza-cards', 'main-card_size-S'));
    return sectionPizza;
}

