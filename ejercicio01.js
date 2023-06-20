// Número palíndromo

function next_pal(numero) {
  numero++;
  
  while (true) {
    if (numero.toString() === numero.toString().split('').reverse().join('')) {
      return numero;
    } else {
      numero++;
      }
      
  }
}

// Ejemplo de uso:
var numero = 29875;
var siguiente = next_pal(numero);
console.log("El siguiente palíndromo después de " + numero + " es: " + siguiente);