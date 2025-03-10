console.log("header.js is connected!");

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello"); 

    const menu = document.querySelector(".menu"); 
    const navList = document.querySelector(".nav-list"); 

    if (!menu || !navList) {
        console.error("Menu or navList not found!");
        return; 
    }

    menu.addEventListener("click", () => {
        console.log("hi"); 
        navList.classList.toggle("show-menu");
    });
});
console.log("header.js is connected!");

