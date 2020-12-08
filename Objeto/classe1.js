class Lancamento {
    constructor(nome = 'Não alterado', valor = 0){
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lacamentos = [];
    }

    addLancamentos(...lacamentos){
        lacamentos.forEach(l => this.lacamentos.push(l));
    }

    sumario () {
        let valorConsolidado = 0;
        this.lacamentos.forEach(l => {
            valorConsolidado += l.valor;
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salário', 45000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());