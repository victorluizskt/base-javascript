const prod1 = {};
prod1.nome = 'Celular ultra mega';
prod1.preco = 4998.90;
prod1['Desconto legal'] = 0.40; // Evitar atributos com espaço.
console.log(prod1);

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90
};

console.log(prod2);