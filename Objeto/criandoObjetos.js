// Usando a notação literal
const obj1 = {};

// Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * ( 1 - desc);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.99, 0.25);
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2));

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);


// Uma função famosa que retorna um Objeto..
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);


const Calc = function(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    return {
        out: () => {
            console.log(this.num1, this.num2);
        }
    }
}

const a = new Calc(1, 2);
a.out();
a.out.bind({num1: 4, num2: 5})()


class Calculator {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;

    }

    out () {
        return console.log(this.num1, this.num2);
    }
}


const b = new Calculator(1, 2);
b.out();
b.out.bind({num1: 4, num2: 5})()
