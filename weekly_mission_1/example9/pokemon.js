/*
Crea el archivo pokemon.js. 
3, Crea una clase Pokemon, exportala usando CommonJS, 
de tal forma que pueda usarse como se indica previamente.
Crea la clase.
Crea un constructor que permita recibir un nombre.
Crea la función sayHello().
Crea la función sayMessage().
Exporta la clase para que pueda ser importada en el archivo main.js.
Este ejercicio deberá resultarte familiar si realizaste los ejercicios anteriores.
*/
class pokemon{
    constructor(name){
      this.name=name
      }
      sayHello (message) {
        console.log(`Mi pokemon  ${this.name} ${'te saluda!!!'}`)
      }
      sayMessage (message) {
        console.log(`Mi pokemon ${this.name} te dice: ${message}`)
      }
  
}

module.exports = pokemon

