console.log(soma(3, 4)); // na linha 1 o compilador já carregou todas as funções.

// function declaration
function soma(x, y) {
    return x + y;
}

// function expression 
const sub = function (x, y) {
    return x - y;
}

console.log(sub(3, 4)); // com function expression posso chamra a função apenas depois.

// named function expression
const mult = function mult(x, y){
    return x * y;
}


console.log(mult(3, 4)); // com name function expression posso chamra a função apenas depois.
