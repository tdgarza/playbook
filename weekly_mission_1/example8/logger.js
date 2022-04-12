/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

/*
El método constructor es un método especial para crear e inicializar un 
objeto creado con una clase. Solo puede haber un método especial con el 
nombre "constructor" en una clase. Si esta contiene mas de una ocurrencia 
del método constructor, se arrojará un Error SyntaxError

Un constructor puede usar la palabra reservada super para llamar al 
constructor de una superclase
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes
*/

export default class Logger {
    constructor (name, noname) {
      this.name = name;
      this.noname = noname;
        }
  
    log (message) {
      console.log(`[${this.name} is ${this.noname}] ${message}`)
    }
  }