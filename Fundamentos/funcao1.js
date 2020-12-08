// Função sem retorno
 function printSum(valorA, valorB) {
     console.log(valorA + valorB);
 }

 printSum(2, 4);
 printSum(2); // Podemos passar a função com apenas um parâmetro
 printSum(2, 3, 4, 5, 6, 7, 8); // Podemos passar também com vários parâmetros. Mas ele pega apenas os dois primeiros;


 // Função com retorno
 function sum(a, b = 0) { // Valor padrão para caso a variável não seja passada por parâmetro.
    return a + b;
 }

 console.log(sum(2, 3));
 console.log(sum(2));