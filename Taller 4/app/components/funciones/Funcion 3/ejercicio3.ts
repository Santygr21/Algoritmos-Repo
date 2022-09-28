let Letras : any[] = [["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"]];

let Letras1 = Letras[0].sort();
let Letras2 = Letras[1].sort();
let Letras3 = Letras[2].sort();


 function Ordenar() {
   let LetrasConcat = [Letras1, Letras2, Letras3];
   let Ordenadas = LetrasConcat.sort();
   console.log(Ordenadas);

   return Ordenadas;
 }

 module.exports = Ordenar;