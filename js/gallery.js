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


const getModal = document.getElementById("modal")
const getModalImage = document.getElementById("modal_image")
const getClose = document.getElementById("cerrar")
const getBack = document.getElementById("atras")
const getForward = document.getElementById("adelante")
const galery = document.getElementById("galery_images");


let currentIndex = 0;

const arrayOfImages = [
    "../media/img/cocinas/cocina-grande-blanco-negro.jpg", 
    "../media/img/cocinas/15b1ca_7bc9409baaf5465f8a7fd0ad98138bee~mv2.webp",
    "../media/img/cocinas/6d63b4b5e642a9c78bf4280502d41421.jpg",
    "../media/img/cocinas/0646c3b75db349db92299e5ec9bd54c8.jpg",
    "../media/img/cocinas/por-que-elegir-electrodomesticos-integrables-en-la-cocina.jpg",
    "../media/img/cocinas/electrodomesticos-integrables-ventajas.jpg",
    "../media/img/cocinas/EDJoOOlWsAAcEdN.jpg",
    "../media/img/cocinas/KI2.jpg",
    "../media/img/cocinas/0d94a22be70a648497561db36110bfd1.jpg",
    "../media/img/cocinas/6d63b4b5e642a9c78bf4280502d41421.jpg",
    "../media/img/cocinas/15b1ca_73e7fe478a8e414fb6016434874d2ee3~mv2_d_3264_1955_s_2.webp"
];

const updateModalImage = () => {
    getModalImage.src = arrayOfImages[currentIndex];
}

getClose.addEventListener("click", function(){
    getModal.classList.remove("active_modal")
})

getModal.addEventListener("click", function(event){
    event.stopPropagation();
})

galery.addEventListener("click", function (e) {
    const obtainingID = parseInt(e.target.id);
    if (!isNaN(obtainingID)) {
        currentIndex = obtainingID;
        updateModalImage();
        getModal.classList.add("active_modal");
    }
});

getBack.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = arrayOfImages.length - 1; 
    }
    updateModalImage();
});

getForward.addEventListener("click", function() {
    if (currentIndex < arrayOfImages.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateModalImage();
});