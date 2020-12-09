const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.0
    }, {
        nome: 'Ana',
        nota: 9.5
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 9
    },{
        nome: 'Roberto',
        nota: 7.5
    }]
}];

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);


// Flatmap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}
const notas2 = escola.flatMap(getNotasDaTurma).reduce((nota, total) => {
    return nota + total;
});
console.log(notas2);