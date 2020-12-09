const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
];

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
   // console.log(acumulador, atual);
    return acumulador + atual;
});

//.reduce(function(o acumulador, o valor atual){
// .../
//}, e o valor que quero que inicie);
// Resultado da soma da nota de todos os alunos.
console.log(resultado);