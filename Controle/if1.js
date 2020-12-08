function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com: ' + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdade(valor){
    if(valor){
        console.log('È verdade.... ' + valor)
    }
}

/* false
*/
seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);

/* true
*/
seForVerdade(-1);
seForVerdade(' ');
seForVerdade('?');
seForVerdade([]);
seForVerdade([1, 2]);
seForVerdade({});