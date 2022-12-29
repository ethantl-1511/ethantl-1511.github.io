// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Closes the contact form when user clicks off it
document.addEventListener("click", function(event) // document listens for a "click", then executes function(event)
    {
        if (event.target.matches(".cancel") ||
            !event.target.closest(".Pop_Up_Button") &&
            !event.target.closest(".form-popup") &&
            !event.target.closest(".btn") &&
            !event.target.closest(".contact"))
        { // if you click on cancel, but DONT click on the others,
            closeForm()
        }
    }, 
    false )

// // Slideshow code, not used in final version
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1};
//     if (n < 1) {slideIndex = slides.length};
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }