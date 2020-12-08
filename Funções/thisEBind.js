const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar;
falar(); // Conflito de paradigmas, funcional e OO;

const falarDePessoa = pessoa.falar.bind(pessoa); // Bind é responsável por arramar um objeto para a const
falarDePessoa(); 