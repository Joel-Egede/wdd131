// Footer Dates

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;

 
// Mobile Navigation

const menuButton = document.getElementById("menu");
const navigation = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        navigation.classList.contains("open")
    );

    menuButton.textContent =
        navigation.classList.contains("open") ? "✖" : "☰";
});

 
// Temple Data
 
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, February, 3",
    area: 57654,
    imageUrl: "images/rexburg.webp"
    },
    {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984, September, 20",
    area: 30000,
    imageUrl: "images/sydney.webp"
    },

    

    {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "images/tokyo.webp"
    },      
    
    {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
        "images/accra.webp"
    },

    {
    templeName: "London England",
    location: "London, England",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl: "images/london.webp"
    },
];



// Display Temple Cards

const gallery = document.querySelector(".gallery");

function displayTemples(templeList) {

    gallery.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("figure");

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        const caption = document.createElement("figcaption");

        caption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        card.appendChild(image);
        card.appendChild(caption);

        gallery.appendChild(card);

    });

}


// Display all temples on page load
displayTemples(temples);


// Navigation Filters

document.getElementById("home").addEventListener("click", (event) => {

    event.preventDefault();

    displayTemples(temples);

    document.querySelector("main h2").textContent = "Home";

});

document.getElementById("old").addEventListener("click", (event) => {

    event.preventDefault();

    const oldTemples = temples.filter(
        temple => parseInt(temple.dedicated) < 1900
    );

    displayTemples(oldTemples);

    document.querySelector("main h2").textContent = "Old Temples";

});

document.getElementById("new").addEventListener("click", (event) => {

    event.preventDefault();

    const newTemples = temples.filter(
        temple => parseInt(temple.dedicated) > 2000
    );

    displayTemples(newTemples);

    document.querySelector("main h2").textContent = "New Temples";

});

document.getElementById("large").addEventListener("click", (event) => {

    event.preventDefault();

    const largeTemples = temples.filter(
        temple => temple.area > 90000
    );

    displayTemples(largeTemples);

    document.querySelector("main h2").textContent = "Large Temples";

});

document.getElementById("small").addEventListener("click", (event) => {

    event.preventDefault();

    const smallTemples = temples.filter(
        temple => temple.area < 10000
    );

    displayTemples(smallTemples);

    document.querySelector("main h2").textContent = "Small Temples";

});