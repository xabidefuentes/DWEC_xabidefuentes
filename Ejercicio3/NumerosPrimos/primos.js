let boton = document.getElementById('btnGenerar');

// Función para saber si es primo
function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function generarTablaPrimos() {
  let limite = parseInt(document.getElementById('numero').value);
  let contenedor = document.getElementById('contenedorTabla');

  if (isNaN(limite) || limite < 1) {
    contenedor.innerHTML = '<p>Por favor, introduce un número válido mayor a 0.</p>';
    return;
  }

  // El enunciado incluye el 1 en el ejemplo visual de la tabla
  let lista = [1];

  for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
      lista.push(i);
    }
  }

  // Construcción de la tabla HTML
  let htmlTabla = '<table><tr>';
  for (let i = 0; i < lista.length; i++) {
    htmlTabla += '<td>' + lista[i] + '</td>';
  }
  htmlTabla += '</tr></table>';

  // Mostrar en el body
  contenedor.innerHTML = htmlTabla;
}

boton.addEventListener('click', generarTablaPrimos);