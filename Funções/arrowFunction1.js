let dobro = function (a){
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; // Return implicito;

console.log(dobro(Math.PI));

let ola = function(){
    return 'Ola';
}

ola = () => {
    return 2 * 'Olá';
}

ola = () => 'Olá';
ola = _ => 'Olá'; // possui um param

console.log(ola());