const mostrarTablaDividir = (event) => {
  event.preventDefault();
  const numero = Number(document.getElementById('numeroDividir').value);

  if (numero >= 1 && numero <= 10) {
    let tabla = document.getElementById('tablaDividir');
    let tablaDividir = `<h2>Tabla de dividir del número ${numero}</h2>`;
    tablaDividir += '<ul>';

    for (let i = 1; i <= 10; i++) {
      tablaDividir += `<li>${numero} / ${i} = ${numero / i}</li>`;
    }

    tablaDividir += '</ul>';
    tabla.innerHTML = tablaDividir;
  } else {
    alert('El número introducido debe estar entre 1 y 10 (ambos inclusive)');
    document.getElementById("numeroDividir").value = '';
  }
};

