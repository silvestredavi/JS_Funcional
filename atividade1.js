const alunos = [
    {nome: 'Ana', nota: 9.5},
    {nome: 'Bia', nota: 7.3},
    {nome: 'Gil', nota: 5.8},
    {nome: 'Leo', nota: 7.6},
    {nome: 'Gui', nota: 9.1},
    {nome: 'Lia', nota: 4.9},
    {nome: 'Rui', nota: 7.0 },
]

const aprovados = [];

//mutabilidade e imperatividade
//Versão Procedural
for (let i = 0; i < alunos.length; i++){
    if(alunos[i].nota >= 7){
        aprovados.push(alunos[i])
    }
}
console.log(aprovados);

//declarativa
//Versão Funcional

const estaAprovado = aluno => aluno.nota >= 7
const aprovado2 = alunos.filter(estaAprovado)
console.log(aprovados);
