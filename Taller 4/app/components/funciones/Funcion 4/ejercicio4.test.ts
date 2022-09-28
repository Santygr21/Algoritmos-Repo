const RepetidosFn = require('./ejercicio4');

test('Palabras repetidas', ()=>{

    let array1: string[] = ["rat", "dog", "cat", "parrot", "cat"]
    let array2: string[] = ["cat", "lizard", "rat", "cat"]
    let duplicado : string[] = [];


    expect(RepetidosFn(array1, array2)).toEqual(duplicado);
});