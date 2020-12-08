function Pessoa(nome){

    this.nome = nome;
    // metódo publico
    this.falar = () => {
        console.log(`Oi meu nome é ${this.nome}`);
    }; 
}

const pessoa = new Pessoa('João');
pessoa.falar();

//document.getElementsByTagName('body')[0].onclick = pessoa.falar