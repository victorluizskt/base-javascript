function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

function random(min = 0, max = 100){
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}
const obj = {max: 50, min: 40};
console.log(rand(obj));
console.log(rand({min: 995}));
console.log(rand({}));

console.log(random(20, 80));
//console.log(rand()); erro