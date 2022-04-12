/*Example 9: Ejercicio

Crea el archivo main.js con el siguiente contenido:
main.js
*/

// Invocas el módulo que contiene la clase
const Pokemon = require('./pokemon')

// Creación de un objeto
const pikachu = new Pokemon("pikachu")
// Creas un objeto nuevo, esto llama por default el constructor de la clase
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")
// invocación del método
pikachu.sayHello()
pikachu.sayMessage("Heey!")
bulbasaur.sayHello()
bulbasaur.sayMessage("Heey!")
charmander.sayHello()
charmander.sayMessage("Heey!")
squirtle.sayHello()
squirtle.sayMessage("Heey!")


/*$ node main.js

Mi pokemon pikachu te saluda!!!
Mi pokemon pikachu dice: Heey!
Mi pokemon bulbasaur te saluda!!!
Mi pokemon bulbasaur dice: Heey!
Mi pokemon charmander te saluda!!!
Mi pokemon charmander dice: Heey!
Mi pokemon squirtle te saluda!!!
Mi pokemon squirtle dice: Heey!


// Creación de un objeto
const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// invocación del método
dbLogger.info('This is an informational message')

// Creación de otro objeto
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')
*/