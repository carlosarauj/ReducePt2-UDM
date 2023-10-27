let pessoas = [
    {nome: 'Carlos', idade: 20},
    {nome: 'Eduardo', idade: 12},
    {nome: 'Araújo', idade: 45},
    {nome: 'Ferreira', idade: 60}
]

let redu = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade < valor.idade) return acumulador
    return valor
})
console.log(redu)