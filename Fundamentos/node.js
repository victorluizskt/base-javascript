let a = 3;

global.b = 123;
this.c = 456;

console.log(this.a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c); // this. é igual ao module.exports

// criando uma variavel maluca: sem var e let!
abc = 3;  // não faça isso em casa.
console.log(global.abc);