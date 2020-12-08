const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

// Remove o ultimo elemento do aray
pilotos.pop(); // Massa quebrou o carro!
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

// Remove da primeira posição
pilotos.shift();
console.log(pilotos);

// Adiciona no início da lista
pilotos.unshift('Hamilton');
console.log(pilotos);

// splice pode adicionar e remover elementos dentro de um array

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);


// remover
pilotos.splice(3, 1) // massa quebrou :I
console.log(pilotos);

// slice 
const alunsPilotos1 = pilotos.slice(2); // novo array a partir do indice 2;
console.log(alunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // novo array do indice 1 até o 4-1 = 3;
console.log(algunsPilotos2);