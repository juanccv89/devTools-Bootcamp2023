// Crear un número de teléfono

function formatearNumeroDeTelefono(numeros) {
  if (numeros.length !== 10) {
    return 'El array debe contener exactamente 10 números.';
  }

  // Insertar paréntesis y espacios en la cadena de texto
  const numeroFormateado = `(${numeros.slice(0, 3).join('')}) ${numeros.slice(3, 6).join('')}-${numeros.slice(6).join('')}`;

  return numeroFormateado;
}

// Ejemplo de uso:
const numerosTelefono = [6, 0, 4, 5, 1, 6, 7, 3, 9, 4];
const numeroFormateado = formatearNumeroDeTelefono(numerosTelefono);
console.log(numeroFormateado);