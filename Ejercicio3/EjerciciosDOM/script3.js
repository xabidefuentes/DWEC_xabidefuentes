// Selecciona directamente solo los enlaces que contienen "://" en su href
const enlacesExternos = document.querySelectorAll('a[href*="://"]');

enlacesExternos.forEach(enlace => {
  enlace.classList.add('externo');
});