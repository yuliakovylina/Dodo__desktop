const slider = () => {
    let itemSlider = document.createElement('section')
    itemSlider.className = 'slider'
    itemSlider.innerHTML = `
        <div class="slider__box">
             <img src="./images/%231.png" class="slider__box_image slider__box_image_desktop">
             <img src="./images/slider_mobile.png" class="slider__box_image slider__box_image_mobile">
         </div>
         <div class="slider__box slider__box_mobile">
             <img src="./images/%231.png" class="slider__box_image slider__box_image_desktop">
             <img src="./images/slider_mobile.png" class="slider__box_image slider__box_image_mobile">
        </div>
    `
    return itemSlider
}
export default slider()