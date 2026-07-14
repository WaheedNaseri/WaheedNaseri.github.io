const menu = document.querySelector("#mobile-menu");

const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});