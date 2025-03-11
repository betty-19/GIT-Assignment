// document.addEventListener("DOMContentLoaded", function () {
//     const menu = document.getElementsByClassName(".menu");
//     const navList = document.getElementsByTagName("ul");

//     if (!menu || !navList) {
//         console.error("❌ Menu button or navigation list not found!");
//         return;
//     }

//     menu.addEventListener("click", function () {
//         console.log("✅ Menu button clicked!");
//         navList.classList.toggle("show-menu");
//     });
// });

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle("show");
}
