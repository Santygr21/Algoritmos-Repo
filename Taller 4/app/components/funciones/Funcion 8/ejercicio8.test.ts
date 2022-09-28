const CalificadorFn = require('./ejercicio8');

test('Falló', () =>{
    let ideas: string[] = [];
    expect(Calificador(ideas)).toBe('Falló');
});

test('Publicar', () =>{
    let ideas: string[] = [];
    expect(Calificador(ideas)).toBe('Publicar');
});

test('Fantástico', () =>{
    let ideas: string[] = [];
    expect(Calificador(ideas)).toBe('Fantástico');
});