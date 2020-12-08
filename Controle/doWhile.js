function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;
let valor = 0;
do {
    opcao = getInteiroAleatorioEntre(-1, 1000);
    valor += opcao;
    console.log(`Opção escolhida foi ${opcao}.`)
    if(opcao == -1){
        console.log(`A soma total foi ${valor}.`)
    }
} while (opcao != -1);

console.log('Até a próxima.')