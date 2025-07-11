const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

scrollRevealOption().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

scrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".header_section .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});

scrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 1500,
});

scrollReveal().reveal(".header_stats", {
    ...scrollRevealOption,
    delay: 2000,
});

scrollReveal().reveal(".genre_card", {
    ...scrollRevealOption,
    interval: 500,
});

scrollReveal().reveal(".feature_image img", {
    ...scrollRevealOption,
    origin: "right",
});

scrollReveal().reveal(".feature_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".feature_list 1:", {
    ...scrollTRevealOption,
    delay: 1000,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    slidePerView : "auto",
    spaceBetween : 20,
});