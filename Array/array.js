console.log(typeof Array);
console.log(typeof new Array);
console.log(typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined

// Adicionar ao array;
aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
console.log(aprovados[8] === null);

console.log(aprovados);
console.log();
aprovados.sort();
console.log(aprovados);

// Deletar do array
delete aprovados[1];
console.log(aprovados[1]);

console.log()

aprovados = ['Bia', 'Carlos', 'Ana'];
// splice (a partir do indice, apague tantos elementos, e adicione, todos esses outros);
aprovados.splice(1, 2, 'Elemento1', 'Elemento2');
console.log(aprovados);