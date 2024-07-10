document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelectorAll(".toggleCheckbox");
    e.forEach(function (e) {
        e.addEventListener("change", function () {
            let t = e.parentElement;
            e.checked ? t.style.maxHeight = "75px" : t.style.maxHeight = "none"
        })
    })
});