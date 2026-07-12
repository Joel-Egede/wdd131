const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.innerHTML = isOpen ? "&#10005" : "&#9776";

    menuButton.setAttribute("aria-expanded", isOpen);

});

document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;