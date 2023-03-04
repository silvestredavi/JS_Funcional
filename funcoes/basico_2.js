function bomDia(){
    console.log("Bom dia!");
}

const boaTarde = function(){
    console.log('Boa Tarde!');
}

//Passar uma função como param pra outra função
function execQQ(fn){
    console.log(typeof fn);
    if(typeof fn === 'function'){
        fn()
    }
}
 execQQ(3)
 execQQ(bomDia)
 execQQ(boaTarde)

 1 == "1" // true - compara valor
 1 === "1" //false - compara valor e tipo
 1 === 1 //true - valor e tipo iguais

 // Retornar uma função a partir de outra função

 function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
 }

 const potenciaDe2 = potencia(2)

 console.log(potenciaDe2(8));

 const pot34 = potencia(3)(4);
 console.log(pot34);