const burger = document.querySelector('.burger')
const menu = document.querySelector('.right-wrap')
const body = document.body

burger.addEventListener('click', () => {
    menu.classList.toggle('show')
    body.classList.toggle('lock')
})

// slider

$('.slider').slick({
    prevArrow:'<button type="button" class="my-prev"><i class="fa-solid fa-paw"></i></button>',
    nextArrow:'<button type="button" class="my-next"><i class="fa-solid fa-paw"></i></button>',
    dots: true,
    infinite:true,
});
