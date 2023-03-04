//Function Declaration
function bomDia(){
    console.log("Bom dia!");
}

bomDia()

//Function expression
const boaTarde = function(){
    console.log('Boa Tarde!');
}

boaTarde()

let x = boaTarde() //undefined - função não retorna nada


function somar(a, b){
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado);

resultado = somar(3) //3 + undefined = NaN (Not a Number)
console.log(resultado);