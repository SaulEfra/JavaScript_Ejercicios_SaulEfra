let calculadora = {
    sumar: function(a, b) {
      return a + b;
    },
  
    restar: function(a, b) {
      return a - b;
    },
  
    multiplicar: function(a, b) {
      return a * b;
    },
  
    dividir: function(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return 'No se puede dividir entre cero';
      }
    }
  };
  
  console.log(calculadora.sumar(5, 3));        
  console.log(calculadora.restar(10, 4));      
  console.log(calculadora.multiplicar(6, 7));  
  console.log(calculadora.dividir(12, 4));     
  console.log(calculadora.dividir(12, 0));     
  