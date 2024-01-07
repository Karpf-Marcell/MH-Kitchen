const html = document.querySelector("html");
const toggleBox = document.querySelector(".toggleBox");

toggleBox.addEventListener("click", () => {
    html.classList.toggle("active");
});