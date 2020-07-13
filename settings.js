const preview = document.getElementById("preview");

document.querySelectorAll("p img").forEach(function (img) {
    img.addEventListener("click", function () {
        preview.src = img.src;
        preview.className = "show";
        return false;
    })
});

window.addEventListener("keyup", function () {
    preview.src = "";
    preview.className = "";
})