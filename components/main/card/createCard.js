export const createCard = (massive, massiveId, classLength) => {
    let el = document.createElement('section')
    el.className = 'pizza-items'
    el.id = 'pizza'
    for (let i = 0; i < massive.length; i++){
        el.innerHTML += `
            <h3 class="heading_3_24px heading_3_24px_hidden main-padding">Пицца</h3>
            <div id='pizza-cards' class="main-padding">
                <div class="main-card ${classLength}">
                    <div class="main-card__image-wrapper">
                        <img class="main-card__image" src="${massive[i].img.src}">
                    </div>
                <div class="main-card__text-wrapper">
                    <p class="heading_4_20px">${massive[i].title}</p>
                    <p class="main-text_small_14_gray main-card__text_small-width">${massive[i].description}</p>
                    <div class="main-card__bottom">
                        <p class="main-card__text_16">${massive[i].cost}</p>
                        <button id="${massive[i].id}" type="button" class="main-button" onclick="">${massive[i].btn}</button>
                    </div>
                     <button id="${massive[i].id}" type="button" class="main-button main-button_light button-price">${massive[i].btnMobile}</button>
                </div>
            </div>
           `
    }
    return el.innerHTML
}

