const newItems = () => {
    let sectionNewItems = document.createElement('section')
    sectionNewItems.className = 'new-items'
    sectionNewItems.innerHTML = `
        <h3 class="heading_3_24px main-padding">Новое и популярное</h3>
    `
    let diff = document.createElement('div')
    diff.classList.add('new-items__cards', 'main-padding');
    diff.innerHTML = `
        <div class="new-items__card">
                    <img class="new-items__card_image" src="./images/new_items/cesar_small.jpg" alt="">
                    <div class="new-items__text">
                        <p class="main-text_small_14">Цезарь</p>
                        <p class="main-text_small_16">от 445 &#8381;</p>
                    </div>
                </div>
                <div class="new-items__card">
                    <img class="new-items__card_image" src="./images/new_items/salmon.jpg" alt="">
                    <div class="new-items__text">
                        <p class="main-text_small_14">Нежный лосось</p>
                        <p class="main-text_small_16">от 495 &#8381;</p>
                    </div>
                </div>
                <div class="new-items__card">
                    <img class="new-items__card_image" src="./images/new_items/2pizzas.jpg" alt="">
                    <div class="new-items__text">
                        <p class="main-text_small_14">2пиццы</p>
                        <p class="main-text_small_16">от 899 &#8381;</p>
                    </div>
                </div>
                <div class="new-items__card">
                    <img class="new-items__card_image" src="./images/new_items/carbonara.jpg" alt="">
                    <div class="new-items__text">
                        <p class="main-text_small_14">Карбонара</p>
                        <p class="main-text_small_16">от 395 &#8381;</p>
                    </div>
                </div>
    `
    sectionNewItems.append(diff)
    return sectionNewItems
}
export default newItems()