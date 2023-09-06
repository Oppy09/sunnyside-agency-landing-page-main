let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".navlinks");

setTimeout(() => {
    hamburger.addEventListener("click", ()=> {
        navLinks.classList.toggle("show");
    });
}, 300);