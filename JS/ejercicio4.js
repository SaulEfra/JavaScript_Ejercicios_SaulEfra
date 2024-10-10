
let numero = 2;
let llamarfuncion = verificarNum(numero)

function verificarNum (numero){
    if(numero >= 1){
        console.log("El numero es positivo")
    }
    if(numero < 0){
        console.log("El numero es negativo")
    }
    if(numero == 0){
        console.log("el numero es cero")
    }
}
