// let coche = {
//     Marca : "Chevrolet",
//     modelo : "Camaro",
//     anio : 2024,
//     prinproduction : function(){
//         document.write(`<p>Este es un ${this.Marca} ${this.modelo} del año ${this.anio}</p>`)
//     }
// }

// const me = Object.create(coche);
// me.Marca = "chevrolet";
// me.modelo = "Camaro";
// me.anio = 2024;
// me.prinproduction();

// const me2 = Object.create(coche);
// me2.Marca = "Lamborgini";
// me2.modelo = "Gallardo";
// me2.anio = 2015;
// me2.prinproduction();

let coche = {
        Marca : "Chevrolet",
        modelo : "Camaro",
        anio : 2024,
}

for (let car in coche){
    document.write(`<h5>${car}</h5> <p>${coche[car]}</p>`)
}

coche.Marca = "Tesla"

document.write(`<h1>objeto modificado</h1>`)

for (let car in coche){
    document.write( ` <h5>${car}</h5> <p>${coche[car]}</p>`)
}
