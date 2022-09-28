const DivisiblesFn = require('./ejercicio2');

test('Números pares', () => {
    let pares : number[] = [];
    expect(pares).toEqual([2, 4, 6, 8]);
    console.log(pares);
})

test('Números impares', () => {
    let impares : number[] = [];
    expect(impares).toEqual([1, 3, 5, 7, 9]);
    console.log(impares);
})