// A variável a é definida na linha 3 mas o hoisting garante que ela já está definida.
console.log('a =', a);
var a = 2;
console.log('a =', a);

console.log('b =', b);
let b = 2;
console.log('b =', b);