const OrdenFn = require('./ejercicio6');

test('Sort', () => {
    let ArrayNL = ["b", 6, "a", "q", 7, 2];

    let Letra1 = ArrayNL.slice(0, 1);
    let Letra2 = ArrayNL.slice(2, 3);
    let Letra3 = ArrayNL.slice(5, 6);

    let GruposOrdenados = Letra1.concat(Letra2, Letra3).sort();

    let Numeros = ArrayNL.filter(Number);
    let NumerosOrd = Numeros.sort((a:any,b:any)=>a-b);
    let Sorted = GruposOrdenados.concat(NumerosOrd);

    expect(Sorted).toEqual(["a", "b", "q", 2, 6, 7]);
    console.log(Sorted)
})