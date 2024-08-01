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


  //Experiencia
  
  let num = 0;

  function sumarCadaSegundo() {
    if (num < 2001) {
        document.getElementById("numbers").textContent=num
        num++;
      setTimeout(sumarCadaSegundo); 
    }
  }

  sumarCadaSegundo();

// function resumar () {
//     if (num == 2000) {
//         num = 0
//         document.getElementById("numbers").textContent=num
//         num++;
//     }
//     setTimeout(resumar,0)
// }

// resumar()



//Intercambiar imagen en la segunda section

document.addEventListener('DOMContentLoaded', function () {
    const images = [
      "./media/img/socialcontent/WhatsApp Image 2024-02-13 at 5.25.12 PM(1).jpeg",
      "./media/img/cocinas/secondsection.webp"
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



//Intercambiar imagen en la 3er section

  // document.addEventListener('DOMContentLoaded', function () {
  //   const images = [
  //       "./media/img/cocinas/cocina-grande-blanco-negro.jpg",
  //       "./media/img/vestidores/vestidor1.webp",

  //   ];
  
  //   let currentIndex = 0;
  //   const imgContainer = document.getElementById('img_3section');
  
  //   setInterval(function () {
  //     currentIndex = (currentIndex + 1) % images.length;
  //     imgContainer.style.opacity = 0; // Fade out
  //     setTimeout(function () {
  //       imgContainer.src = images[currentIndex];
  //       imgContainer.style.opacity = 1; // Fade in
  //     }, 500); // Espera 500 milisegundos antes de cambiar la imagen
  //   }, 6000); // Cambia la imagen cada 6 segundos
  // });

  document.addEventListener('DOMContentLoaded', function () {
    const images = [
        "./media/img/cocinas/cocina-grande-blanco-negro.jpg",
        "./media/img/vestidores/vestidor1.webp",
    ];

    let currentIndex = 0;
    const imgContainer = document.getElementById('img_3section');
    const cardContainer = document.getElementById('card2');

    setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        
        // Fade out the image
        imgContainer.style.opacity = 0;
        
        setTimeout(function () {
            // Change the image source
            imgContainer.src = images[currentIndex];
            
            // Fade in the image
            imgContainer.style.opacity = 1;
            
            // Ensure the card opacity remains constant
            cardContainer.style.opacity = 1;
        }, 500); // Wait 500 milliseconds before changing the image
    }, 6000); // Change the image every 6 seconds
});






  //Intercambiar imagen en la quinta section

document.addEventListener('DOMContentLoaded', function () {
  const images = [
    "./media/img/obras/noti.webp",
    "./media/img/obras/uranovski.webp",
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
