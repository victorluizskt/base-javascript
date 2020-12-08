// Pessoa -> 123.85.15 -> {...}
const pessoa = {nome: 'Joao'};
pessoa.nome = 'Pedro';
console.log(pessoa);

// Pessoa -> 456.123.14 -> {...} 
/* pessoa = {nome: 'Ana'}; */

// Uma vez que o objeto está congelado, não se pode mais mexer nele
Object.freeze(pessoa);

pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'João'});
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);
