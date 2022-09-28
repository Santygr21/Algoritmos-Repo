const ResultadosFn = require('./ejercicio10');

const min=1;
const max=6;

const DadoA = Math.round(Math.random() * (max - min)) + min;
const DadoB = Math.round(Math.random() * (max - min)) + min;

const Suma = DadoA + DadoB;


test('Resultado de dados', () => {
expect(DadoA).toBeGreaterThanOrEqual(1);
expect(DadoA).toBeLessThanOrEqual(6);
console.log("El resultado del dado 1 es = ", DadoA);

expect(DadoB).toBeGreaterThanOrEqual(1);
expect(DadoB).toBeLessThanOrEqual(6);
console.log("El resultado del dado 1 es = ", DadoB);
})

test('Suma de resultados', () => {
expect(Suma).toBeGreaterThanOrEqual(2);
expect(Suma).toBeLessThanOrEqual(12);
console.log("El resultado de la suma es =", Suma)
})


let Dos = 0; 
let Tres = 0;
let Cuatro = 0;
let Cinco = 0;
let Seis = 0;
let Siete = 0;
let Ocho = 0; 
let Nueve = 0;
let Diez = 0;
let Once = 0;
let Doce = 0;

for(let i=1; i<=20; i++){
    switch(Suma){
        case 1:Dos++; break;
        case 2:Tres++; break;
        case 3:Cuatro++; break;
        case 4:Cinco++; break;
        case 5:Seis++; break;
        case 6:Siete++; break;
        case 7:Ocho++; break;
        case 8:Nueve++; break;
        case 9:Diez++; break;
        case 10:Once++; break;
        case 11:Doce++; break;
    }
}

const Resultados = ["2:", Dos, "3:", Tres, "4:", Cuatro, "5:", Cinco, "6:", Seis, "7:", Siete, "8:", Ocho, "9:", Nueve, "10:", Diez, "11:", Once, "12:", Doce];

test('Resultado de las sumas', () => {
    expect(SumarTiros).toEqual(Resultados);
    console.log(Resultados);
})