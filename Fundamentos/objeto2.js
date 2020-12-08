console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} // ES 2016
console.log(typeof Produto);
console.log(typeof new Produto);

Produto.nome = 'Victor';
console.log(Produto.nome);

for(var i = 0; i < 10; i++){console.log('Victor Lindo')}
