$(document).ready(function(){
    $('.section-testimonials-slider-wrapper').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(evt) {
        evt.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}