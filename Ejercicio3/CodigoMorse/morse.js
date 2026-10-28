// Diccionario de equivalencias
let equivalencias = {
  'A': '.-',   'B': '-...', 'C': '-.-.', 'D': '-..',  'E': '.',    'F': '..-.',
  'G': '--.',  'H': '....', 'I': '..',   'J': '.---', 'K': '-.-',  'L': '.-..',
  'M': '--',   'N': '-.',   'O': '---',  'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...',  'T': '-',    'U': '..-',  'V': '...-', 'W': '.--',  'X': '-..-',
  'Y': '-.--', 'Z': '--..', '0': '-----','1': '.----','2': '..---','3': '...--',
  '4': '....-','5': '.....','6': '-....','7': '--...','8': '---..','9': '----.'
};

// Pedir datos por prompt
let entrada = prompt('Introduce un texto o un código morse:');

if (entrada) {
  let esMorse = entrada.includes('.') || entrada.includes('-');
  let resultado = '';

  if (esMorse) {
    // Traducción Morse a Texto
    let palabras = entrada.split('  '); // Dos espacios separan palabras

    for (let i = 0; i < palabras.length; i++) {
      let letras = palabras[i].split(' '); // Un espacio separa letras

      for (let j = 0; j < letras.length; j++) {
        for (let clave in equivalencias) {
          if (equivalencias[clave] === letras[j]) {
            resultado += clave;
            break;
          }
        }
      }
      resultado += ' ';
    }
  } else {
    // Mayususculas
    let texto = entrada.toUpperCase();

    for (let i = 0; i < texto.length; i++) {
      let caracter = texto[i];
      if (caracter === ' ') {
        resultado += ' '; // Espacio extra para meter espacios entre palabras
      } else if (equivalencias[caracter]) {
        resultado += equivalencias[caracter] + ' ';
      }
    }
  }

  // Imprimir
  document.getElementById('resultado').innerHTML = '<p><strong>Resultado:</strong> ' + resultado + '</p>';
}