const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Victor'];
aprovados.forEach((nome, indice) => {
    console.log(`${indice +1}) ${nome}`);
});

aprovados.forEach(nome => console.log(nome));
const exibirAprovados = aprovado => console.log(aprovado);
const exibirAprovadosIndice = (aprovado, indice) => console.log(`${indice + 1}) ${aprovado}`);
aprovados.forEach(exibirAprovados);
aprovados.forEach(exibirAprovadosIndice);