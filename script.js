const menu = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".nav-links");


// Check elements exist before running
if (menu && navLinks) {


    // Toggle mobile menu
    menu.addEventListener("click", () => {

        const isActive = navLinks.classList.toggle("active");

        // Accessibility update
        menu.setAttribute(
            "aria-expanded",
            isActive
        );

    });



    // Close menu after clicking a link
    document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menu.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });



    // Close menu when clicking outside
    document.addEventListener("click", (event)=>{


        const clickedOutside =
        !menu.contains(event.target) &&
        !navLinks.contains(event.target);


        if(clickedOutside){

            navLinks.classList.remove("active");

            menu.setAttribute(
                "aria-expanded",
                "false"
            );

        }


    });



    // Close menu with ESC key
    document.addEventListener("keydown",(event)=>{


        if(event.key === "Escape"){


            navLinks.classList.remove("active");


            menu.setAttribute(
                "aria-expanded",
                "false"
            );


        }


    });


}