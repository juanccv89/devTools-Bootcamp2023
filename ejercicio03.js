// Contador de existencias

function countNameRepetitions(names) {
  const nameCount = {};
  
  for (const name of names) {
    if (nameCount[name]) {
      nameCount[name] += '*';
    } else {
      nameCount[name] = '*';
    }
  }
  
  return nameCount;
}

// Ejemplo de uso:
const nombres = ['Juan', 'María', 'Juan', 'Pedro', 'María', 'María'];
const resultado = countNameRepetitions(nombres);
console.log(resultado);