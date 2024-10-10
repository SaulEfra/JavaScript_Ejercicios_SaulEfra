class persona  {
    constructor (nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar (){
        console.log(`hola mi nombre es ${this.nombre}`)
    }

}

let per1 = new persona('Saul',24);

per1.saludar();