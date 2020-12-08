function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;
let valor = 0;
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 100);
    valor += opcao;
    console.log(`Opção escolhida foi ${opcao}.`)
    if(opcao == -1){
        console.log(`A soma total foi ${valor}.`)
    }
}

console.log('Até a próxima.')