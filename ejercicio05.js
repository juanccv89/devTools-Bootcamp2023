// Dibujando una X con asteriscos

function drawX(tamano) {
  if (tamano % 2 === 0) {
    console.log("El tamaño debe ser un número impar.");
    return;
  }

  for (let i = 0; i < tamano; i++) {
    let linea = "";

    for (let j = 0; j < tamano; j++) {
      if (j === i || j === tamano - 1 - i) {
        linea += "*";
      } else {
        linea += " ";
      }
    }

    console.log(linea);
  }
}

// Ejemplo de uso:
drawX(9);