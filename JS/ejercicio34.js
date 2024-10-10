class persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`hola mi nombre es ${this.nombre}.`);
    }
  }
  
  class estudiante extends persona {
    constructor(nombre, edad, grado) {
      super(nombre, edad);
      this.grado = grado;
    }
  
    gradoes() {
      console.log(`Estoy en el grado: ${this.grado}.`);
    }
  }
  
  let estudiante1 = new estudiante('Ana', 20, '3er año');
  estudiante1.saludar(); 
  estudiante1.gradoes(); 