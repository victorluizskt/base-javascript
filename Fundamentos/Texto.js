/*
    Um programa bem simples para verificar a quantidade de palavras em um texto.
*/


const texto = "Com o constante desenvolvimento da inteligência artificial e suas o crescimento das possibilidades de suas aplicações é de suma importância analisar as consequências da implementação da IA no trânsito e até onde as responsabilidades sobre possíveis acidentes são exclusivamente da IA ou dos seus desenvolvedores e outros possíveis indivíduos e elementos presentes no trânsito que possam interagir e interferir no trajeto da IA. A pesquisa será conduzida através da análise dos resultados obtidos pelo estudo da Insurance Institute for Highway Safety (IIHS) onde os seus resultados indicam que mesmo com a implementação de carros autônomos no trânsito, isso não seria suficiente para zerar os índices de acidentes. O presente estudo espera concluir que as responsabilidades sobre os acidentes no trânsito não devem cair única e exclusivamente sobre a inteligência artificial, mas principalmente sobre as ações humanas,visto que foram elas utilizadas de referência para a aprendizagem da IA.  As conclusões obtidas abrange que a IA, assim como as ações humanas não é perfeita  e nunca serão, mas são capazes de diminuir consideravelmente os números de acidentes e salvar inúmeras vidas, considerando também a maior facilidade de correções."

function tamanhoTexto(msg){
    const tamanhoTexto = msg.split(" ").length;
    console.log(`O tamanho do seu texo é de ${tamanhoTexto} palavras!`);
}

console.log(tamanhoTexto(texto));
