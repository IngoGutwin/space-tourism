/* when someone clicks the hamburger menu
 if the nav is closed, open it
 if the nav is open, close it */

const nav = document.querySelector(".primary-nav-bar");
const navToggle = document.querySelector(".mobile-nav-toggle");


navToggle.addEventListener("click", () => {
    if(nav.getAttribute("data-visible") === "false"){
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});