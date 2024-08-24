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



//Cambiar el slogan en base al tiempo
document.addEventListener('DOMContentLoaded', function () {
    const sloganElement = document.getElementById('slogan');
    const textos = ['tus expectativas', 'tu espíritu', 'tu inspiración', 'tus sentidos']; // Puedes agregar más textos según sea necesario
    let index = 0;
  
    function cambiarTexto() {
        sloganElement.style.opacity = 0
        setTimeout(function(){
            sloganElement.textContent = textos[index];
            sloganElement.style.opacity = 1
            index = (index + 1) % textos.length;
        }, 2000)
    }
  
    // Cambiar el texto cada 5 segundos
    setInterval(cambiarTexto, 5000);
  });


  let numProjects = 0;
  let numYears = 0;
  let hasAnimated = false;
  
  const targetProjects = 2000;
  const targetYears = 20;
  const duration = 2000; // 1 seconds
  
  function animateNumbers() {
    const yearsElement = document.getElementById('years_num');
    const projectsElement = document.getElementById('numbers');
  
    const incrementProjects = targetProjects / (duration / 10); // Incremento para proyectos
    const incrementYears = targetYears / (duration / 10); // Incremento para años
  
    const interval = setInterval(() => {
      if (numYears < targetYears) {
        numYears += incrementYears;
        if (numYears > targetYears) numYears = targetYears; // Asegurarse de no exceder el objetivo
        yearsElement.textContent = `+${Math.floor(numYears)}`;
      }
  
      if (numProjects < targetProjects) {
        numProjects += incrementProjects;
        if (numProjects > targetProjects) numProjects = targetProjects; // Asegurarse de no exceder el objetivo
        projectsElement.textContent = `+${Math.floor(numProjects)}`;
      }
  
      if (numYears >= targetYears && numProjects >= targetProjects) {
        clearInterval(interval);
      }
    }, 10); // Intervalo de actualización
  }
  
  function checkIfInView() {
    const section = document.querySelector('.fourth_section');
    const header = document.getElementsByTagName("header");
    const rect = section.getBoundingClientRect();
  
    if (rect.top <= 60 && rect.bottom >= 60 && !hasAnimated) {
      hasAnimated = true;
      animateNumbers();
    }
  }
  
  window.addEventListener('scroll', checkIfInView);
  window.addEventListener('load', checkIfInView); 



//Intercambiar imagen en la segunda section

document.addEventListener('DOMContentLoaded', function () {
    const images = [
      "./media/img/socialcontent/WhatsApp Image 2024-02-13 at 5.25.12 PM(1).jpeg",
      "./media/img/socialcontent/WhatsApp Image 2024-02-13 at 5.25.12 PM.jpeg"
    ];
  
    let currentIndex = 0;
    const imgContainer = document.getElementById('img_2section');
    
    setInterval(function () {
      currentIndex = (currentIndex + 1) % images.length;
      imgContainer.style.opacity = 0; // Fade out
      setTimeout(function () {
        imgContainer.src = images[currentIndex];
        imgContainer.style.opacity = 1; // Fade in
      }, 500); // Espera 500 milisegundos antes de cambiar la imagen
    }, 6000); // Cambia la imagen cada 6 segundos
  });



  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.getElementById('carousel_slides');
    const slideCount = slides.children.length;
    const slideIndicators = document.querySelectorAll('#slide-indicators li')
    let currentIndex = 0;
    updateSlideIndicators(currentIndex);

    // Array con los textos y títulos de cada slide
    const slideData = [
        { title: 'Cocinas', text: 'Encuentra inspiración en cada rincón de nuestras cocinas que fusionan estilo y funcionalidad a la perfección.', count: '1/4' },
        { title: 'Placares', text: 'Optimiza cada espacio con nuestros placares, donde diseño y practicidad se encuentran.', count: '2/4' },
        { title: 'Vestidores', text: 'Descubre la elegancia y el orden en nuestros vestidores personalizados.', count: '3/4' },
        { title: 'Complementos', text: 'Añade los detalles finales con nuestros complementos de alta calidad.', count: '4/4' }
    ];

    const getC = document.getElementById("c");
    const getP = document.getElementById("p");
    const getV = document.getElementById("v");
    const getCom = document.getElementById("com");


    // Función para actualizar la tarjeta con el contenido correspondiente
    function updateCardContent(index) {
      const cardTitle = document.querySelector('#card2 h3');
      const cardText = document.querySelector('#card2 .card_text');
      const cardCount = document.querySelector('#card2 .card_link p:first-child');

      // Actualizar el contenido
      cardTitle.textContent = slideData[index].title;
      cardText.textContent = slideData[index].text;
      cardCount.textContent = slideData[index].count;
      updateSlideIndicators(index);
  };

  function updateSlideIndicators(index) {
    // Quitar el estilo de negrita de todos los li
    slideIndicators.forEach(li => {
        li.style.fontWeight = 'normal'; // Normal para los demás
    });

    // Resaltar el li correspondiente al índice actual
    slideIndicators[index].style.fontWeight = 'bold'; // Negrita para el seleccionado
}

    // Función para cambiar la imagen y actualizar la tarjeta
    function nextImage() {
        currentIndex = (currentIndex + 1) % slideCount;
        const translateXValue = -(currentIndex * 100); // Desplazamos en base al índice
        slides.style.transform = `translateX(${translateXValue}%)`;
        // Actualizar el contenido de la tarjeta
        updateCardContent(currentIndex);
    }

    // Cambiar la imagen al hacer clic en el botón
    const nextButton = document.querySelector('.third_section_btn');
    nextButton.addEventListener('click', () => {
        nextImage();
    });

    // Iniciar el carrusel automáticamente
    let intervalId = setInterval(nextImage, 7000); 
});



  //Intercambiar imagen en la quinta section

document.addEventListener('DOMContentLoaded', function () {
  const images = [
    "./media/img/obras/noti.webp",
    "./media/img/obras/terraz.webp",
  ];

  let currentIndex = 0;
  const imgContainer = document.getElementById('img_5section');

  setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    imgContainer.style.opacity = 0; // Fade out
    setTimeout(function () {
      imgContainer.src = images[currentIndex];
      imgContainer.style.opacity = 1; // Fade in
    }, 500); // Espera 500 milisegundos antes de cambiar la imagen
  }, 6000); // Cambia la imagen cada 6 segundos
});







const imagesOfFirstCarrousel = [
  { src: '../media/img/vestidores/Screenshot_1.png', href: './pages/vestidores.html' },
  { src: '../media/img/complementos/COMPLEMENTOS/DSC_0049.JPG', href: './pages/complementos.html' },
  { src: '../media/img/cocinas/COCINAS/IMG_2829.jpg', href: './pages/cocinas.html' },
  { src: '../media/img/placares/PLACARES/GAS_6899.jpg', href: './pages/placares.html' }
];

let firstImage = 0;

const portalImgElement = document.querySelector('.first_section_portal_img');
const linkElement = document.getElementById('more-link');

function updateCarousel() {
  portalImgElement.style.backgroundImage = `url(${imagesOfFirstCarrousel[firstImage].src})`;
  linkElement.href = imagesOfFirstCarrousel[firstImage].href;
}

document.getElementById('first_section_portal_button').addEventListener('click', () => {
  firstImage = (firstImage + 1) % imagesOfFirstCarrousel.length;
  updateCarousel();
});

// Iniciar el carrusel con la primera imagen
updateCarousel();