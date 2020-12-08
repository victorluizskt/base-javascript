const nome = 'Rebeca';
const concatenacao = 'Ola ' + nome + '!';
// Sempre imprime junto o que esta dentro do Dollar;
const template = ` 
        olá
        ${nome}!
`

console.log(concatenacao, template);
console.log(`1 + 1 = ${1 + 1}`);

// Podemos chamar uma função dentro do console.log
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('Cuidado')}!`)