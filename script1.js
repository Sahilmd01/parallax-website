document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from refreshing the page

            // Reset the form fields
            contactForm.reset();

            // Show a success message
            alert("Message sent successfully!");
        });
    } else {
        console.error("Contact form not found.");
    }
});
