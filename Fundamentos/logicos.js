function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; // Operador unario
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}

console.log(compras(true, true));
console.log(compras(true, false))