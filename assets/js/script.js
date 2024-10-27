'use strict';

/**
 * La función addEventOnElements añade el mismo manejador de eventos a múltiples elementos HTML. Recibe como parámetros los elementos, 
 * el tipo de evento y la función de respuesta, y aplica esta última a todos los elementos especificados.
 */
const addEventOnElements = (elements, eventType, callback) => {
  elements.forEach(element => element.addEventListener(eventType, callback));
};

/**
 * Este código controla la visibilidad de una barra de navegación en dispositivos móviles. Activa o desactiva la barra y el botón del menú 
 * al hacer clic, y oculta la barra al seleccionar cualquier enlace.
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNav);
addEventOnElements(navLinks, "click", () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
});

/**
 * Este código añade o remueve la clase "active" del encabezado y un botón de regreso al inicio según se desplace la página más allá de 
 * 100px.
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activateOnScroll = () => {
  const isActive = window.scrollY > 100;
  header.classList.toggle("active", isActive);
  backTopBtn.classList.toggle("active", isActive);
};

window.addEventListener("scroll", activateOnScroll);

/** 
 * Este código crea un efecto visual de onda en botones cuando el mouse se mueve sobre ellos, actualizando las propiedades de posición CSS 
 * del efecto en tiempo real basado en la posición del cursor.
 */
const buttons = document.querySelectorAll("[data-btn]");
const buttonHoverRipple = event => {
  const { offsetY, offsetX } = event;
  event.currentTarget.style.setProperty("--top", `${offsetY}px`);
  event.currentTarget.style.setProperty("--left", `${offsetX}px`);
};

addEventOnElements(buttons, "mousemove", buttonHoverRipple);

/**
 * Este código agrega la clase "revealed" a elementos cuando se hacen visibles en la ventana al desplazarse, creando un efecto de
 * revelado al cargar la página o al hacer scroll.
 */
const revealElements = document.querySelectorAll("[data-reveal]");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight / 1.1) {
      el.classList.add("revealed");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/**
 * Este código personaliza el cursor en una página web. Mueve un cursor personalizado siguiendo la posición del ratón y cambia su estilo
 * al pasar sobre enlaces y botones. Añade y elimina la clase "hovered" cuando el cursor entra y sale de estos elementos.
 */
const cursor = document.querySelector("[data-cursor]");
const hoverElements = document.querySelectorAll("a, button");

const moveCursor = event => {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
};

window.addEventListener("mousemove", moveCursor);

addEventOnElements(hoverElements, "mouseover", () => cursor.classList.add("hovered"));
addEventOnElements(hoverElements, "mouseout", () => cursor.classList.remove("hovered"));
