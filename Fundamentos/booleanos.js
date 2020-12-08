let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// Podemos usar 1 ou 0 para valores booleanos
isAtivo = 1;
console.log(!!isAtivo);

console.log('Os verdadeiros..');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo == true));

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para finalizar');
console.log(!!('' || null || 0 || ' '))

// Se o nome for vazio, o nome sera desconhecido.
let nome = '';
// Caso o nome não esteja valido imprima essa outra informação.
console.log(nome || 'Desconhecido.')