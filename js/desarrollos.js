//Menu movement
const menu = document.querySelector('.menu');
const l1 = document.querySelector(".l1")
const l2 = document.querySelector(".l2")
const l3 = document.querySelector(".l3")


menu.addEventListener("click", function(){
    animateBars()
})

function animateBars (){
    l1.classList.toggle("activel1")
    l2.classList.toggle("activel2")
    l3.classList.toggle("activel3")
}


// Cambio de color en scroll:
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const navLogo = document.getElementById("navLogo");
    const menu = document.getElementById("menu");
    const options = document.getElementById("options_container");
    const line1 = document.getElementById("l1");
    const line2 = document.getElementById("l2");
    const line3 = document.getElementById("l3");

    // Obtener la posición de desplazamiento vertical
    const scrollPosition = window.scrollY;

    // Verificar si el menú está abierto
    const isMenuOpen = options.classList.contains('active');

    // Cambiar el fondo y mostrar/ocultar la imagen según la posición de desplazamiento y el estado del menú
    if (scrollPosition > 0) {
        header.style.backgroundColor = "black";
        menu.style.backgroundColor = "transparent";
        navLogo.style.display = "block";
        if (!isMenuOpen) {
            line1.style.background = "white";
            line2.style.background = "white";
            line3.style.background = "white";
        } else {
            line1.style.background = "black";
            line2.style.background = "black";
            line3.style.background = "black";
        }
    } else {
        line1.style.background = "black";
        line2.style.background = "black";
        line3.style.background = "black";
        header.style.backgroundColor = "transparent";
        navLogo.style.display = "none";
        menu.style.backgroundColor = "white";
    }
});

//Desplegar navbar
const menu1 = document.getElementById("menu")
const options = document.getElementById("options_container")
const line1 = document.getElementById("l1")
const line2 = document.getElementById("l2")
const line3 = document.getElementById("l3")

const menuEvent = menu.addEventListener('click',()=>{
    openingBar()
})


function openingBar () {
    const sidebar = options.classList.toggle("active")
    document.body.classList.toggle('menu-open', sidebar);

    if (sidebar) {
        line1.style.background = "black"
        line2.style.background = "black"
        line3.style.background = "black"
    } else if (window.scrollY > 0) {
        line1.style.background = "white"
        line2.style.background = "white"
        line3.style.background = "white"
    } else {
        line1.style.background = "black"
        line2.style.background = "black"
        line3.style.background = "black"
    }
}







let currentIndex = 1;

function showSlides() {
    const items = document.querySelectorAll('.carousel_item');
    items.forEach((item, index) => {
        item.classList.remove('carousel_item--left', 'carousel_item--main', 'carousel_item--right');
        if (index === currentIndex) {
            item.classList.add('carousel_item--main');
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('carousel_item--left');
        } else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('carousel_item--right');
        }
    });
}

function nextSlide() {
    const items = document.querySelectorAll('.carousel_item');
    currentIndex = (currentIndex + 1) % items.length;
    showSlides();
}

function prevSlide() {
    const items = document.querySelectorAll('.carousel_item');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});




// Datos de proyectos: nombre y dirección
const projects = [
    { name: "Condominios Dolfines", address: "Dirección 1" },
    { name: "Guarani", address: "Dirección 2" },
    { name: "Torre Nordlink", address: "Dirección 3" },
    { name: "Torre Embarcadero", address: "Dirección 3" },
    { name: "Torre Victoria Río", address: "Dirección 3" },
    { name: "Torre Felicitas", address: "Dirección 3" },
    { name: "Edificio Duomo", address: "Dirección 3" },
    { name: "Edificio Teruel II", address: "Dirección 3" },
    { name: "Edificio Base 6", address: "Dirección 3" },
    { name: "Edificio Rocamaru", address: "Dirección 3" },
    { name: "Edificio Corrientes I", address: "Dirección 3" },
    { name: "Edificio San Martín", address: "Dirección 3" },
    { name: "Fideicomiso Mendoza", address: "Dirección 3" },
    { name: "Fideicomiso Pueyrredón", address: "Dirección 3" },
    { name: "Kolimpo II, III y IV", address: "Dirección 3" },
    { name: "Edificio Z 1350", address: "Dirección 3" },
    { name: "Excelsia Italia", address: "Dirección 3" },
    { name: "Optimia Catamarca", address: "Dirección 3" },
    { name: "Optimia Ituzaingo", address: "Dirección 3" },
    { name: "Attica Rosetti", address: "Dirección 3" },
    { name: "Condominio Los Capellanes", address: "Dirección 3" },
    { name: "Pinamar", address: "Dirección 3" },
    { name: "Optimia Laprida", address: "Dirección 3" },
    { name: "Taka I", address: "Dirección 3" },
    { name: "Pje. Indarte", address: "Dirección 3" },
    { name: "Optimia Catamarca", address: "Dirección 3" },
    { name: "Edificio Ov.Lagos 347", address: "Dirección 3" },
    { name: "Avellaneda 1014 Bis", address: "Dirección 3" },
    { name: "Edificio San Lorenzo", address: "Dirección 3" },
    { name: "Edificio Valderrey", address: "Dirección 3" },
    { name: "NB Construcciones", address: "Dirección 3" },
    { name: "Werk Construcciones", address: "Dirección 3" },
    { name: "Fisherton Park", address: "Dirección 3" },
    { name: "Optimia Brown", address: "Dirección 3" },
    { name: "Icaro 21", address: "Dirección 3" },
    { name: "Organic", address: "Dirección 3" },
    { name: "Optimia San Martin", address: "Dirección 3" },
    // Continúa añadiendo hasta el proyecto 38
];

// Obtener elementos del DOM
const modal = document.getElementById("projectsModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];
const projectsContainer = document.getElementById("projectsContainer");

// Función para generar la lista de proyectos dinámicamente
function generateProjects() {
    projects.forEach(project => {
        // Crear el contenedor de cada proyecto
        let projectItem = document.createElement('div');
        projectItem.className = 'project-item';

        // Crear el título del proyecto
        let projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;

        // Crear la dirección del proyecto
        let projectAddress = document.createElement('p');
        projectAddress.textContent = project.address;

        // Añadir el título y la dirección al contenedor del proyecto
        projectItem.appendChild(projectTitle);
        projectItem.appendChild(projectAddress);

        // Añadir el proyecto al contenedor de proyectos
        projectsContainer.appendChild(projectItem);
    });
}

// Abrir el modal y generar los proyectos
btn.onclick = function() {
    modal.style.display = "block";
    projectsContainer.innerHTML = ""; // Limpiar el contenido anterior (si es necesario)
    generateProjects(); // Generar los proyectos dinámicamente
}

// Cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal haciendo clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
