let array1: string[] = ["rat", "dog", "cat", "parrot", "cat"]
let array2: string[] = ["cat", "lizard", "rat", "cat"]
let array3 = array1.concat(array2)
let dupicado: string[] = [];

function Repetidos(){
const unicArray = [...array3].sort();
for (let i = 0; i < unicArray.length; i++) {
  if (unicArray[i + 1] === unicArray[i]) {
    dupicado.push(unicArray[i]);
  }
}
console.log([... new Set(dupicado)]);
}

module.exports = Repetidos;