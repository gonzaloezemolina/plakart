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


// Datos de proyectos: nombre y dirección
const projects = [
    { name: "Dolfines Guaraní", address: "Rosario - Madres Pl. 25 de Mayo 2830" },
    { name: "Torre Nordlink", address: "Rosario - Puerto Norte" },
    { name: "Torre Embarcadero", address: "Rosario - Madres Pl. 25 de Mayo 3080" },
    { name: "Torre Victoria Río", address: "Rosario - Av.Wheelwright 1461" },
    { name: "Torre Felicitas", address: "Rosario - San Luis 417" },
    { name: "Edificio Duomo", address: "Rosario - Joaquín V. González 1151 bis" },
    { name: "Edificio Teruel II", address: "Dirección 3" },
    { name: "Edificio Base 6", address: "Rosario - Montevideo 125" },
    { name: "Edificio Rocamaru", address: "Rosario" },
    { name: "Edificio Corrientes I", address: "Rosario - Corrientes" },
    { name: "Edificio San Martín", address: "Rosario - San Martín" },
    { name: "Fideicomiso Mendoza", address: "Rosario - Mendoza" },
    { name: "Fideicomiso Pueyrredón", address: "Rosario - Pueyrredón" },
    { name: "Kolimpo II, III y IV", address: "Rosario - Iriondo 1265,Alsina 1361,Constitucion 1320" },
    { name: "Edificio Z 1350", address: "Rosario" },
    { name: "Excelsia Italia", address: "Rosario - Italia 2059" },
    { name: "Optimia Catamarca", address: "Rosario - Catamarca 1590" },
    { name: "Optimia Ituzaingo", address: "Rosario - Ituizango 236" },
    { name: "Attica Rosetti", address: "Rosario - San Martin 545" },
    { name: "Condominio Los Capellanes", address: "Pinamar" },
    { name: "Optimia Laprida", address: "Rosario - Laprida 1470" },
    { name: "Taka I", address: "Rosario - España y Cerrito" },
    { name: "Pje. Indarte", address: "Rosario - Pasaje Indarte 3728" },
    { name: "Edificio Ov.Lagos 347", address: "Rosario - Ov.Lagos 347" },
    { name: "Fideicomiso BSM", address: "Rosario - Pedro Tuella 1051" },
    { name: "Edificio San Lorenzo", address: "Dirección 3" },
    { name: "Edificio Valderrey", address: "Dirección 3" },
    { name: "Edificio NB Constr", address: "San Lorenzo" },
    { name: "Werk Construcciones", address: "Dirección 3" },
    { name: "Fisherton Park", address: "Fisherton - Brassey 8061" },
    { name: "Optimia Brown", address: "Rosario - Brown 1735" },
    { name: "Icaro 21", address: "Rosario - San Juan 536" },
    { name: "Organic", address: "Rosario - España y Zeballos" },
    { name: "Optimia San Martin", address: "Rosario - San Martín 1592" },
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

function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

// Función para activar el scroll del body y html
function enableScroll() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
}

// Abrir el modal y generar los proyectos
btn.onclick = function() {
    modal.style.display = "block";
    projectsContainer.innerHTML = ""; // Limpiar el contenido anterior (si es necesario)
    generateProjects(); // Generar los proyectos dinámicamente
    disableScroll();
}

// Cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
    enableScroll();
}

// Cerrar el modal haciendo clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        enableScroll();
    }
}



          let i = 0;
          let slides = document.querySelectorAll(".slide");
          let slider = document.querySelector(".slider");
          var pause = false;
        
          function moveRight() {
            slides[i].className = "slide";
            i = (i + 1) % slides.length;
            slides[i].className = "slide active";
            let Xvalue = -160 * i;
            slider.style.transform = `translateX(${Xvalue}px)`;
          }
        
          function moveLeft() {
            slides[i].className = "slide";
            i = (i - 1 + slides.length) % slides.length;
            slides[i].className = "slide active";
            let Xvalue = -160 * i;
            slider.style.transform = `translateX(${Xvalue}px)`;
          }
        
          const interval = setInterval(() => {
            if (!pause) {
              moveRight();
            }
          }, 2000);
        
          function playPause() {
            let icon = document.getElementById("playPauseIcon");
        
            if (!pause) {
              pause = true;
              icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                  <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                </svg>`;
            } else {
              pause = false;
              icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
                  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
                </svg>`;
            }
          }