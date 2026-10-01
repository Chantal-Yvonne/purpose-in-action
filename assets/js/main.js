
// Mobile Menu
 const hamburger = document.querySelector(".hamburger");
    const mainMenu = document.querySelector(".main-menu");

    hamburger.addEventListener("click", function () {
        mainMenu.classList.toggle("active");
    });