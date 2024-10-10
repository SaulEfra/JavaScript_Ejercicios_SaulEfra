let res = 0;
function promedio(array){
    if (array.length == 0){
        return "El array esta vacio"
    }else{
        for (let step = 0; step < array.length; step++) {
            res = res + array[step];  
        }
        let prom = res / array.length
        return prom
    }
    
}

let arr = [4,5,6,7,8]

document.write(arr)
document.write('<h1>El promedio es: </h>',promedio(arr))
