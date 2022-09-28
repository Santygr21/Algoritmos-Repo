const FactorialFn = require('./ejercicio9');

test('Integers', () => {
    expect(factorial(8)).toEqual(40320);
    console.log(factorial(8))
})