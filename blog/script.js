document.querySelectorAll("img").forEach(image => {
    image.addEventListener("click", (e) => {
        var target = e.target || e;
        window.location.assign(target.src)
    })
});