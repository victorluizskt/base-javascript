// Função em JS é First-Class Object(Citizens)
// High order function

// Forma literal
function fun1() { 

}

// Armazenar em uma variável, função anônima.
const fun2 = function () { }


// Armazenar em um array
const array = [function(a, b) { return a + b}, fun1, fun2];
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'};
console.log(obj.falar());

// Passar função como param
function run(fun){
    fun();
}

run(function() {console.log('Executando...')});

// Um função pode retornar/conter uma outra função
function sum(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}

sum(2, 3)(4);
const cincoMais = sum(2, 3);
cincoMais(4);
