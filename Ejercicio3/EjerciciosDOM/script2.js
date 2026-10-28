// Selecciona todos los enlaces de la página
const enlaces = document.querySelectorAll('a');

enlaces.forEach(enlace => {
  const href = enlace.getAttribute('href');
  
  // Verifica si el atributo href contiene "://"
  if (href && href.includes('://')) {
    enlace.style.color = 'orange';
  }
});