let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".navlinks");
let links = document.querySelectorAll(".link");

setTimeout(() => {
    hamburger.addEventListener("click", ()=> {
        navLinks.classList.toggle("show");
    });
    
    for (let i = 0; i < 4; i++) {
        links[0].addEventListener("click", ()=> {
             navLinks.classList.remove("show");
        });
        links[1].addEventListener("click", ()=> {
             navLinks.classList.remove("show");
        });
        links[2].addEventListener("click", ()=> {
             navLinks.classList.remove("show");
        });
        links[3].addEventListener("click", ()=> {
             navLinks.classList.remove("show");
        });    
    }
}, 300);
