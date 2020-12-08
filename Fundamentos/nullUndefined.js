let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString()); Erro!

const produto = {};
console.log(produto.preco);
produto.preco = 3.5;
console.log(produto.preco);

produto.preco = undefined; // Evite atribuir undefined;
console.log(produto)
delete produto.preco; // Para tirar o atributo do objeto utilizamos delete 