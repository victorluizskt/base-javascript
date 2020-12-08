// par nome/valor
const saudacao = 'Opa'; // Contexto léxico 1

function exec(){
    const saudacao = 'Falaaa'; // Contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

class Person {
    constructor(id, nome, ativo, idade){
        this.id = id;
        this.nome = nome;
        this.ativo = ativo; 
        this.idade = idade;
    }
}

const person1 = new Person(1, 'Victor', true, 29);
console.log(person1);