const icon = document.querySelector(".icon")
const menu = document.querySelector(".menu")

/* Abre menú */

icon.addEventListener("click", () => {
    icon.classList.toggle("active")
    menu.classList.toggle("active")
})

/* Cierra menú */

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    icon.classList.remove("active")
    menu.classList.remove("active")
}))
