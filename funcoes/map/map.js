
const nums = [1, 2, 3, 4, 5]
const dobro = n => n*2
console.log(nums.map(dobro));
console.log("---------------------------------");


const nomes = ['Ana','Bia','Gui','Lia','Rafa']
const primeiraLetra = nome => nome[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes.map(primeiraLetra));
console.log(nomes, letras);
console.log("---------------------------------");

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.28 }
]

const getNameProduct1 = obj => obj.nome;
const getTotalValue1 = obj => obj.nome + ": " + obj.qtde*obj.preco;

const namesProduct1 = carrinho.map(getNameProduct1);
console.log(namesProduct1);
console.log("---------------------------------");

const valueProduct1 = carrinho.map(getTotalValue1);
console.log(valueProduct1);

Array.prototype.meuMap = function(fn) {
    const mapped = []

    for(let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this);
        mapped.push(result)
    }
    
    return mapped
    
}

const getNameProduct = obj => obj.nome;
const getTotalValue = obj => obj.nome + ": " + obj.qtde*obj.preco;

const namesProduct = carrinho.meuMap(getNameProduct);
console.log(namesProduct);
console.log("---------------------------------");

const valueProduct = carrinho.meuMap(getTotalValue);
console.log(valueProduct);