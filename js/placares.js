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


window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const navLogo = document.getElementById("navLogo");
    const menu = document.getElementById("menu");
    const options = document.getElementById("options_container");
    const line1 = document.getElementById("l1");
    const line2 = document.getElementById("l2");
    const line3 = document.getElementById("l3");

    const scrollPosition = window.scrollY;

    const isMenuOpen = options.classList.contains('active');

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

const getModal = document.getElementById("modal")
const getModalImage = document.getElementById("modal_image")
const getClose = document.getElementById("cerrar")
const getBack = document.getElementById("atras")
const getForward = document.getElementById("adelante")
const galery = document.getElementById("galery_images");

let currentIndex = 0;

const arrayOfImages = [
"../media/img/placares/placard-ancho-habitacion.jpeg",
"../media/img/placares/placard-espejo.png",
"../media/img/placares/placard-espejo-habitacion.jpeg",
"../media/img/placares/placard-espejo-ancho.jpeg",
"../media/img/placares/placard-madera-semioscura.jpeg",
"../media/img/placares/placard-cajon.png"
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