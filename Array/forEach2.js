Array.prototype.forEach2 = function (callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Victor'];

aprovados.forEach2((nome, indice) => {
    console.log(`${indice +1}) ${nome}`);
});