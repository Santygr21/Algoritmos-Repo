const CombinarFn = require('./ejercicio1');

test('Combinar arreglos', () => {
    let arrayC: any[] = ["h", 7, "a", 4, "c", 17, 10, 48];

    expect(arrayC).toEqual(['h', 7,'a', 4, 'c', 17, 10, 48]);
    console.log(arrayC);
});