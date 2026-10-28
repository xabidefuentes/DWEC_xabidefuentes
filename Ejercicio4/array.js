let arr = [95, 95, 14, 83, 58, 33, 65, 52, 7, 72, 13, 46, 19, 31, 27, 36, 30, 86, 88, 88, 68, 16, 5, 14, 41, 56, 89, 11, 6, 29, 72, 11, 69, 36, 16, 11, 82, 84, 32, 84, 95, 98, 76, 99, 100, 12, 89, 1, 92, 27, 66, 48, 38, 49, 30, 40, 87, 19, 31, 37, 5, 32, 9, 33, 98, 94, 5, 15, 4, 88, 47, 34, 83, 8, 31, 4, 2, 72, 31, 39, 15, 10, 46, 78, 11, 21, 92, 22, 83, 3, 6, 71, 39, 54, 50, 77, 13, 85, 7, 36];

// 1. Devuelve el array ordenado sin modificar el array original
function ordenar(array) {
  // El [...] copia el array original y luego lo ordena
  return [...array].sort((a, b) => a - b);
}

// 2. Devuelve un array solo de impares y ordenados
function imparesOrdenados(array) {
  return array
    .filter(num => num % 2 !== 0) 
    .sort((a, b) => a - b); 
}

// 3. Devuelve un array únicamente con los números impares de dos cifras
function imparesDosCifras(array) {
  return array.filter(num => num % 2 !== 0 && num >= 10 && num <= 99);
}

// 4. Devuelve un array con la frecuencia de cada elemento
function frecuencia(array) {
  let resultado = [];
  
  array.forEach(num => {
    let elemento = resultado.find(item => item.numero === num);
    
    if (elemento) {
      elemento.veces++; 
    } else {
      resultado.push({ numero: num, veces: 1 }); 
    }
  });
  
  return resultado;
}