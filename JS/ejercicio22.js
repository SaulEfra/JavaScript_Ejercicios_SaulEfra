// Modificar propiedades de un objeto

function buscarValorEnArray(array, valor) {
    let posicion = array.indexOf(valor);
  
    if (posicion !== -1) {
      console.log(`El valor ${valor} se encuentra en la posición ${posicion}.`);
    } else {
      console.log(`El valor ${valor} no se encuentra en el array.`);
    }
  }
  
  let miArray = [10, 20, 30, 40, 50];
  buscarValorEnArray(miArray, 30);  
  