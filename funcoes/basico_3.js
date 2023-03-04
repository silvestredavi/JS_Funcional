//arrow function
const felizNatal = () => console.log('Feliz Natal!!');

felizNatal()

const saudacao = (nome) => `Fala ${nome}!!!`

console.log(saudacao("Davi"));

const somar = (...numeros) => {
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}

console.log(somar(1,2,3,4,5,6));

function potenciaA(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}
//to
const potenciaB = base => exp => Math.pow(base, exp)

console.log(potenciaB(2)(10));

//this
Array.prototype.log = () => console.log(this[this.length - 1]); // undefined por causa do this

Array.prototype.log = function(){
     console.log(this[this.length - 1])
}

const numeros = [1, 2, 3, 500]
numeros.log()
 