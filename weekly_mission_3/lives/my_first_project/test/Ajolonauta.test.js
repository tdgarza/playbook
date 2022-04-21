const Ajolonauta = require('./../app/Ajolonauta')

describe("Pruebas de unidad de Ajolonauta", ()=>{
    test('Caso de prueba 1: Creacion de objeto', () =>{
        //Aqui puedes usar el codigo como lo desees utilizar
        const woopa= new Ajolonauta("Woopa")
        //Validar el resultado esperado
        expect(woopa.name).toBe("Woopa");
    });
})