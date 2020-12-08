class Avo {
    constructor(sobrenome = 'Desconhecido'){
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Desempregado'){
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva');
    }
}

const filho = new Filho();
console.log(filho);

filho.sobrenome = 'Mateus';
filho.profissao = 'Engenheiro de Computação.';
console.log(filho);