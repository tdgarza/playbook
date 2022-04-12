/*
  Este modulo se comporta como si fuera un objeto que contiene todo lo definido

  [Module: null prototype] {
    DEFAULT_LEVEL: 'info',
    LEVELS: { error: 0, debug: 1, warn: 2, data: 3, info: 4, verbose: 5 },
    Logger: [class Logger],
    log: [Function: log]
  }

*/
/*
export default function cube(x) {
  return x * x * x;
}
con default le puedo quitar las llaves al import al hacer el llamado
*/
export function cube(x) {
    return x * x * x;
}
// exports a function
export function log (message) {
    console.log(message)
  }
  // exports a constant
  export const DEFAULT_LEVEL = 'info'
  
  // exports an object
  export const LEVELS = {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5
  }

  // exports a class
  //Los export con nombre son útiles cuando se necesitan exportar múltiples valores. 
  //Durante el import, es obligatorio usar el mismo nombre que el correspondiente objeto.

  export class Logger {
    constructor (name) {
      this.name = name
    }
      log (message) {
      console.log(`[${this.name}] ${message}`)
    }
  
  }
/* export
La declaración export se utiliza al crear módulos de JavaScript para exportar funciones, 
objetos o tipos de dato primitivos del módulo para que puedan ser utilizados por otros 
programas con la sentencia import.

Los módulos exportados están en strict mode tanto si se declaran así como si no. 
La sentencia export no puede ser utilizada en scripts embebidos.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export
*/

