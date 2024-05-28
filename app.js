const faqs = document.querySelectorAll(".faqfaq");

faqs.forEach(faqfaq => {
    faqfaq.addEventListener("click", () => {
        faqfaq.classList.toggle("active");
    });
});