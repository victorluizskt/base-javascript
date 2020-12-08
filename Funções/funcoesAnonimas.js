const sum = function (x, y) {
    return x + y;
}

const imprimirResultado = function(a, b, operacao = sum){
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);
imprimirResultado(3, 4, sum);
imprimirResultado(3, 4, function(x, y) {
    return x - y;
})

imprimirResultado(3, 4, (x, y) => x * y);

const Pessoa = {
    falar: function(){
        console.log('Opa');
    }
}

Pessoa.falar();