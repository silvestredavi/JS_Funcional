// 1) somar(3)(4)(5)

function somar(a) {
    return function(b){
        return function(c) {
            return a + b + c
        }
    }
}

//Resultado 1)
const soma3maisX = somar(3);
const soma3mais4 = soma3maisX(4);
const soma3mais4mais5 = soma3mais4(5);

console.log(soma3mais4mais5);
console.log(somar(3)(4)(5));

// 2) calcular(3)(7)(fn)
function calcular(a){
    return function(b){
        return function (fn){
            return fn(a, b)
        }
    }
}

const multiplica = function (a, b){
    return a * b
}

const divide = function (a, b){
    return a / b
}

 //Resulta 2)
 console.log(calcular(3)(7)(multiplica));
 console.log(calcular(3)(7)(divide));



