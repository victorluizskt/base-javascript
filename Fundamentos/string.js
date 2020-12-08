const escola = "Cod3r";
console.log(escola.charAt(4));

// Retorna valor vazio, pois não tem a posição 5
console.log(escola.charAt(5));

// Pega o valor na tabela asc
console.log(escola.charCodeAt(3));

// Imprime apenas o valor passado por parâmetro
console.log(escola.indexOf('3'));

// Pega a String (inicio, fim);
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

// Faz a concatenação de valores
console.log('Escola'.concat(escola).concat('!'));

// Altera o valor do indice
console.log(escola.replace(3, 'e'));

// Substitui todos os valores por 'e'; essa função vem do regex;
console.log(escola.replace(/\w/g, 'e'));

// Converte os valores para um array
console.log('Ana,Maria,Pedro'.split(','));

// Usando regex;
console.log('Ana,Maria,Pedro'.split(/,/));
 