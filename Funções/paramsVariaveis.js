function sum(){
    // Pode pegar todos os parâmetros com o arguments
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1.1, 2.2, 3.3));
console.log(sum(1.1, 2.2, "Teste"));
console.log(sum('a', 'b', 'c'));
