function contarVocales(palabra) {
    let contador = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    
    for (let letra of palabra.toLowerCase()) { 
        //includes sirve para verificar si hay un elemento dentro del array
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    
    return contador;
}

let palabra = "Programación";
console.log(contarVocales(palabra));
