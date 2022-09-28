let numeros: number[] = [1,2,3,4,5,6,7,8,9]
let pares: number[] = [];
let impares: number[] = [];


function Divisible(){
for (let i = 0; i < numeros.length; i++) {
    if (i % 2==0) {
        impares.push(numeros[i])
    }
    else{
        pares.push(numeros[i])
    }
    
}
}

module.exports = Divisible;


