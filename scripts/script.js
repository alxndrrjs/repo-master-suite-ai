
// Detectar scroll y añadir clase scrolled al header
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {    
        header.classList.remove("scrolled");
    }
});