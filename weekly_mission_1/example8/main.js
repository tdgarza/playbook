// Importando la clase MyLogger
//me imagino que importa la clase, aunque se llame Logger y esta se llame MyLogger
import MyLogger from './logger.js'

/*
La palabra clave new hace lo siguiente:

Crea un objeto JavaScript simple y en blanco;
Vincula (establece el constructor de) este objeto a otro objeto;
Pasa el objeto recién creado del Paso 1 como el contexto this;
Devuelve this si la función no devuelve un objeto.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/new
*/
const logger = new MyLogger('Superman', 'Clark Kent')

//el new pasa la palabra clave superman a name en el this

logger.log('Hello World')