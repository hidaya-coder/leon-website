let iconmenu = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu');

iconmenu.onclick = function() {
    if (menu.style.visibility == "hidden") {
        menu.style.visibility = "visible";
    } else {
        menu.style.visibility = "hidden";
    }
};