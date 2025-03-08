const menu = document.querySelector(".menu"); // Select the menu button
const navList = document.querySelector(".nav-list ul"); // Select the navigation list

menu.addEventListener("click", () => {
    navList.classList.toggle("show-menu");
});
