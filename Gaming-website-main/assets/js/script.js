'use strict';



/**
 * La función addEventOnElements añade el mismo manejador de eventos a múltiples elementos HTML. Recibe como parámetros los elementos, 
 * el tipo de evento y la función de respuesta, y aplica esta última a todos los elementos especificados.
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 Este código controla la visibilidad de una barra de navegación en dispositivos móviles. Activa o desactiva la barra y el botón del menú 
 al hacer clic, y oculta la barra al seleccionar cualquier enlace.
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElements(navLinks, "click", navClose);



/**
 Este código añade o remueve la clase "active" del encabezado y un botón de regreso al inicio según se desplace la página más allá de 
 100px.
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeEl = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeEl);


/** 
  Este código crea un efecto visual de onda en botones cuando el mouse se mueve sobre ellos, actualizando las propiedades de posición CSS 
  del efecto en tiempo real basado en la posición del cursor.
 */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);


/**
 * Este código agrega la clase "revealed" a elementos cuando se hacen visibles en la ventana al desplazarse, creando un efecto de
 *  revelado al cargar la página o al hacer scroll.
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);



/**
 * CEste código personaliza el cursor en una página web. Mueve un cursor personalizado siguiendo la posición del ratón y cambia su estilo
 *  al pasar sobre enlaces y botones. Añade y elimina la clase "hovered" cuando el cursor entra y sale de estos elementos.
 */

const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
}

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElements, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoverElements, "mouseout", function () {
  cursor.classList.remove("hovered");
});