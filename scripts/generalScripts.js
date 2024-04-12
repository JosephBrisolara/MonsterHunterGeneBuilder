function hamburger() {
    var menu = document.getElementById("navigation-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}