import createHead from "./components/header/header.js";
import createFooter from "./components/footer/footer.js";
import slider from "./components/main/slider/slider.js";
import {pizza} from "./components/main/sectionPizza/pizza.js";

const app = () => {
    let page = document.querySelector('#root')
    page.append(createHead)
    page.append(slider)
    page.append(pizza())
    page.append(createFooter)
}


export default app