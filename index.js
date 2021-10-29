import createHead from "./components/header/header.js";
import createFooter from "./components/footer/footer.js";
import slider from "./components/main/slider/slider.js";
import {pizza} from "./components/main/sectionPizza/pizza.js";
import {combo} from "./components/main/sectionCombo/combo.js";
import {starters} from "./components/main/starters/starters.js";
import {desserts} from "./components/main/sectionDesserts/desserts.js";
import {drinks} from "./components/main/sectionDrinks/drinks.js";
import newItems from "./components/main/newItems/newItems.js";

const app = () => {
    let page = document.querySelector('#root')
    page.append(createHead)
    page.append(slider)
    let main = document.createElement('main')
    page.append(main)
    main.append(newItems, pizza(),combo(),starters(), desserts(), drinks())
    page.append(createFooter)
}


export default app