/*
La sentencia import se usa para importar funciones que han sido 
exportadas desde un módulo externo.

defaultExport
Nombre que se referirá al export por defecto del módulo.

module-name
El módulo desde el que importar. Normalmente es una ruta relativa o 
absoluta al archivo .js que contiene el módulo, excluyendo la extensión .js. 
Algunos empaquetadores pueden permitir o requerir el uso de la extensión; comprueba tu entorno. 
Sólo se permiten Strings con comillas simples o dobles.

name
Nombre del objeto del módulo que se utilizará como nombre de dominio al hacer 
referencia a los imports.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import
*/

/*
Importa el contenido de todo un módulo.
Esto inserta myModule en el ámbito actual, que contiene todos los elementos 
exportados en el archivo ubicado en  /modules/my-module.js.

import * as myModule from '/modules/my-module.js';
*/

import * as loggerModule from './logger.js'

console.log(loggerModule)

import {DEFAULT_LEVEL} from './logger.js'
console.log(DEFAULT_LEVEL)

import {cube} from './logger.js'
console.log(cube(3));