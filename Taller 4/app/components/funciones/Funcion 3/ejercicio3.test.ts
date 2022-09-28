const OrdenarFn = require('./ejercicio3');

test('Organizar grupos', () => {
    let Letras = [["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"]];
    let Letras1 = Letras[0].sort();
    let Letras2 = Letras[1].sort();
    let Letras3 = Letras[2].sort();

    let LetrasConcat = [Letras1, Letras2, Letras3];

    let Ordenadas = LetrasConcat.sort();

    expect(Ordenadas).toEqual([["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]);
    console.log(Ordenadas);
})