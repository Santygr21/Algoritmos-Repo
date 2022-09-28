let arrayA: any[] = ["h", "a", "c"];
let arrayB: any[] = [7, 4, 17, 10, 48];

function Combinar(arrayA: any, arrayB: any){
  
  let size_array = arrayA.length + arrayB.length
  let arrayC: any[] = [];
  for (let i = 0; i < size_array; i++) {
      if(arrayA[i] !== undefined){
          arrayC.push(arrayA[i]);
      }
      if(arrayB[i] !== undefined){
          arrayC.push(arrayB[i]);
      }
  }
  return arrayC;
}

console.log(Combinar(arrayA, arrayB));

module.exports = Combinar;