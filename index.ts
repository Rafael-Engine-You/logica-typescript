const tela = require('readline-sync')
//Pergunta o nome da pessoa, ano e calcula idade 
const nome:string = tela.question('Whats your name? ')
const anoNasc:number = tela.question('Qual seu ano do nascimento? ')
const idade = 2026 - anoNasc
console.log("Ola "+ nome +" a sua idade é "+ idade +' anos.' )

