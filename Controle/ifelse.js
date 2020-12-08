const imprimirResultado = function(nota) {
    if(Number.isInteger(nota)) {  // Verifica se o valor é um númeroooo
        if(nota >= 7) {
            console.log('Aprovado.');
        } else {
            console.log('Reprovado.');
        }
    } else {
        console.log('Apenas números.')
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!')