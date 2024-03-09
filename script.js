const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav ul");
const links = document.querySelectorAll(".nav ul li a");
var linksLength = links.length;

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    menuToggle.classList.toggle("menu-active");
});

for (var i = 0; i < linksLength; i++) {
    links[i].addEventListener("click", function () {
        nav.classList.toggle("nav-active");
        menuToggle.classList.toggle("menu-active");
        let current = document.getElementsByClassName("active");
        console.log(current);
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    });
}
