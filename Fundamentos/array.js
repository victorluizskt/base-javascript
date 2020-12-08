const valores = [7.7, 8.6, 9.2, 5.6];
console.log(valores[0], valores[3]);
console.log(valores[4]) // Não da erro, apenas undefined.

valores[4] = 10;
console.log(valores);
console.log(valores.length);

// push adicionar valores
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

// pop apaga os valores do array
console.log(valores.pop());

// deleta na posição escolhida
delete valores[0];
console.log(valores);

// array é do tipo object
console.log(typeof valores);
