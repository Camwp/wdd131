document.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector(".menu-toggle"),
        t = document.querySelector("nav");
    e.addEventListener("click", function c() {
        console.log("Hamburger icon clicked!"), t.classList.toggle("active"), e.classList.toggle("active")
    }), document.addEventListener("click", function (c) {
        e.contains(c.target) || t.contains(c.target) || (console.log("Tapped outside the menu"), t.classList.remove("active"), e.classList.remove("active"))
    })
});