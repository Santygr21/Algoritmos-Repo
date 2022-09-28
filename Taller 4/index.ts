/*
- Reference versuss copying.
    Memoria stack (guarda keyName y valor) cuando son objetos (guarda keyName y pointer), la memoria Heap guarda los objetos.
    
    image => https://felixgerschau.com/static/b452488bd7eeac0405c48f164da6280d/437e0/stack-heap-pointers.png
    reference => https://felixgerschau.com/javascript-memory-management/

*/

////////// Ref vs Value
let a: number = 20;
const b: number = a;
a = 30;
console.log(b);

const x: number[] = [20, 32, 50]; // explain why this can be const and not need to be let
const y: number[] = x;
x[0] = 30;
console.log(x);

/////// default params and optional params
// this is how we would normally do it
function computeArea(alto?: number, ancho?: number, largo?: number) {
  if (alto === undefined) {
    alto = 1;
  }

  if (ancho === undefined) {
    ancho = 1;
  }

  if (largo === undefined) {
    largo = 1;
  }

  return alto * ancho * largo;
}

const firstResponse = computeArea(25);
console.log(firstResponse);

/// but we could also do
const computeArea2 = (alto: number = 1, ancho: number = 1, largo: number = 1) =>
  alto * ancho * largo;
const secondResponse = computeArea2(25);
console.log(secondResponse);

// with interface, signature and RORO (Receive an object, return an object)
interface ComputeAreaProps {
  alto?: number;
  ancho?: number;
  largo?: number;
}

const computeArea3 = ({
  alto = 1,
  ancho = 1,
  largo = 1,
}: ComputeAreaProps): number => alto * ancho * largo;

// with RORO we don't need to remember the order of the params and the code becames more semantic
const thirdResponse = computeArea3({ largo: 25 });
console.log(thirdResponse);

/////////// Recursion
function countDown(number: number): void {
  console.log(number);
  if (number > 0) countDown(number - 1);
}
// see the call stack

const factorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
