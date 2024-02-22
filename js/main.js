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






//   //Cambiar el texto en base al tiempo
// document.addEventListener('DOMContentLoaded', function () {
//     const textElement = document.getElementById('fourth_section_text_animation');
//     const textos = ['PLACARES', 'VESTIDORES', 'COMPLEMENTOS', 'COCINAS']; // Puedes agregar más textos según sea necesario
//     let index = 0;
  
//     function cambiarTexto() {
//         textElement.style.opacity = 0
//         setTimeout(function(){
//             textElement.textContent = textos[index];
//             textElement.style.opacity = 1
//             index = (index + 1) % textos.length;
//         }, 2000)
//     }
  
//     // Cambiar el texto cada 5 segundos
//     setInterval(cambiarTexto, 4000);
//   });




  //Experiencia
  
  let num = 0;

  function sumarCadaSegundo() {
    if (num < 2001) {
        document.getElementById("numbers").textContent=num
        num++;
      setTimeout(sumarCadaSegundo, 10); 
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


