// Exemplo de callback no browser
// document.getElementsByTagName('body')[0].onclick = function (e) {
//     console.log('O evento ocorreu!');

// }

var fs = require('fs'); 
console.log("Primeiro comando");
fs.readFile('arquivo.txt', callback);
function callback(err, conteudo){
	if (err) return console.error(err);
    console.log(String(conteudo));
}
console.log("Segundo comando");
console.log("Terceiro comando");