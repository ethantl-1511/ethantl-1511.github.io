// These functions open and close the contact form
function openContact() {
    document.getElementById("contact-form").style.display = "block";
}
function closeContact() {
    document.getElementById("contact-form").style.display = "none";
}

// Closes the contact form when user clicks off it
document.addEventListener("click", function(event) // document listens for a "click", then executes function(event)
    {
        if (event.target.matches(".contact-cancel") ||
            !event.target.closest(".contact-btn") &&
            !event.target.closest(".contact-form") &&
            !event.target.closest(".btn") &&
            !event.target.closest(".navbar-contact") &&
            !event.target.closest(".about-contact") &&
            !event.target.closest(".slideshow-contact"))
        { // if you click on cancel, but DONT click on the others,
            closeContact()
        }
    }, 
    false )