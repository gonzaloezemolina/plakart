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

document.addEventListener('DOMContentLoaded', function () {
    const textos = ['tus expectativas', 'tu espíritu', 'tu inspiración', 'tus sentidos']; 
    const sloganElement = document.getElementById('slogan');
    sloganElement.innerHTML = "tus sentidos"
    let index = 0;
    function cambiarTexto() {
        sloganElement.style.opacity = 0
        setTimeout(function(){
            sloganElement.textContent = textos[index];
            sloganElement.style.opacity = 1;
            index = (index + 1) % textos.length;
        }, 2000)
    }
    setInterval(cambiarTexto, 5000);
  });


  let numProjects = 0;
  let numYears = 0;
  let hasAnimated = false;
  
  const targetProjects = 2000;
  const targetYears = 20;
  const duration = 2000; 
  
  function animateNumbers() {
    const yearsElement = document.getElementById('years_num');
    const projectsElement = document.getElementById('numbers');
  
    const incrementProjects = targetProjects / (duration / 10); 
    const incrementYears = targetYears / (duration / 10);
  
    const interval = setInterval(() => {
      if (numYears < targetYears) {
        numYears += incrementYears;
        if (numYears > targetYears) numYears = targetYears; 
        yearsElement.textContent = `+${Math.floor(numYears)}`;
      }
  
      if (numProjects < targetProjects) {
        numProjects += incrementProjects;
        if (numProjects > targetProjects) numProjects = targetProjects; 
        projectsElement.textContent = `+${Math.floor(numProjects)}`;
      }
  
      if (numYears >= targetYears && numProjects >= targetProjects) {
        clearInterval(interval);
      }
    }, 10); 
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


document.addEventListener('DOMContentLoaded', function () {
    const images = [
      "./media/img/socialcontent/complemento-index-modulo.jpeg",
      "./media/img/socialcontent/complemento-index-plakart.jpeg"
    ];
  
    let currentIndex = 0;
    const imgContainer = document.getElementById('img_2section');
    
    setInterval(function () {
      currentIndex = (currentIndex + 1) % images.length;
      imgContainer.style.opacity = 0;
      setTimeout(function () {
        imgContainer.src = images[currentIndex];
        imgContainer.style.opacity = 1; 
      }, 500); 
    }, 6000); 
  });


  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.getElementById('carousel_slides');
    const slideCount = slides.children.length;
    const slideIndicators = document.querySelectorAll('#slide-indicators li')
    let currentIndex = 0;
    updateSlideIndicators(currentIndex);

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


    function updateCardContent(index) {
      const cardTitle = document.querySelector('#card2 h2');
      const cardText = document.querySelector('#card2 .card_text');
      const cardCount = document.querySelector('#card2 .card_link p:first-child');

      cardTitle.textContent = slideData[index].title;
      cardText.textContent = slideData[index].text;
      cardCount.textContent = slideData[index].count;
      updateSlideIndicators(index);
  };

  function updateSlideIndicators(index) {
    slideIndicators.forEach(li => {
        li.style.fontWeight = 'normal'; 
    });

    slideIndicators[index].style.fontWeight = 'bold'; 
}

    function nextImage() {
        currentIndex = (currentIndex + 1) % slideCount;
        const translateXValue = -(currentIndex * 100);
        slides.style.transform = `translateX(${translateXValue}%)`;
        updateCardContent(currentIndex);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1  + slideCount) % slideCount;
      const translateXValue = -(currentIndex * 100); 
      slides.style.transform = `translateX(${translateXValue}%)`;
      updateCardContent(currentIndex);
  }

    const nextButton = document.querySelector('.third_section_btn');
    nextButton.addEventListener('click', () => {
        nextImage();
    });

    const prevButton = document.querySelector('#third_btn_left');
    prevButton.addEventListener('click', () => {
        prevImage();
    });

    let intervalId = setInterval(nextImage, 7000); 
});


document.addEventListener('DOMContentLoaded', function () {
  const images = [
    "./media/img/obras/nordlink.jpeg",
    "./media/img/obras/terraz.webp",
  ];

  let currentIndex = 0;
  const imgContainer = document.getElementById('img_5section');

  setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    imgContainer.style.opacity = 0; 
    setTimeout(function () {
      imgContainer.src = images[currentIndex];
      imgContainer.style.opacity = 1; 
    }, 500); 
  }, 6000); 
});

const imagesOfFirstCarrousel = [
  { src: './media/img/vestidores/vestidor.png', href: './pages/vestidores.html' },
  { src: './media/img/complementos/complemento-naranja-guitarra.webp', href: './pages/complementos.html' },
  { src: './media/img/cocinas/cocina-gris-plakart.jpg', href: './pages/cocinas.html' },
  { src: './media/img/placares/placard-ancho-habitacion.jpeg', href: './pages/placares.html' }
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

updateCarousel();