//  console.log(10 > 5) //true
//  console.log(10 < 5) //false
//  console.log(10 <= 5) //false
//  console.log(10 >= 5) //true
//  console.log(10 == 5) //false
//  console.log(10 == '10') //true
//  console.log(10 === '10') //false
//  console.log(10 != '10') //false
//  console.log(10 !== '10') //true

// console.log((10 < 5) && (10 > 2))
// console.log((10 > 5) || (10 < 2))
// console.log((10 > 5) || !(10 < 2))
// console.log(!(10 > 5) || (10 < 2))

// criar duas variáveis (de usuário e senha) e criar 
//variável de autenticação para verificar se nome
//e senha estão corretos

// let user = 'Karol'
// let password = "123"

// let authentication = user === 'Karol' && password === '123'
// console.log(authentication)

// const grade = 4

// if(grade >= 60){
//     console.log('APROVADO!')
// }

// console.log('Fim do código')

// const grade = 60

// if(grade >= 60){
//     console.log('APROVADO!')
// } else {
//     console.log('REPROVADO!')
// }

// estrutura que teste a idade de alguém: entre 18 e 32 pode realizar
// concurso, caso não, não pode se inscrever no concurso

// const age = 100

// if( 18 <= age <= 32 ){
//     console.log('Pode realizar o concurso!')
// } else {
//     console.log('Não pode se inscrever!')
// }

// let age = 50

// if((age >= 18) && (age <= 32)){
//     console.log('Pode realizar o concurso!')
// } else {
//     console.log('Não pode se inscrever!')
// }

// <condicao> ? <verdadeiro> : <falso>
// let age = 100
// let ternaryResult = (18 <= age <= 32) ? console.log('Pode se inscrever') : console.log('Não pode se inscrever')
 

// Exercício 1: Verificar número par ou ímpar - escreva um programa que solicite ao usuário um número e verifique se ele é par ou ímpar.
// let num1 = 17
// num1 % 2 === 0 ? console.log('PAR') : console.log('IMPAR')


// Exercício 2: Comparação de três números - escreva um programa que receba três números e determine qual é o maior.
// let num1 = 5
// let num2 = 3
// let num3 = 3
// if((num1 > num2) && (num1 > num3)){
//     console.log('Primeiro valor é maior')
// } else if((num2 > num1) && (num2 > num3)){
//     console.log('Segundo valor é maior')
// } else {
//     console.log('Terceiro valor é maior')
// }


// Exercício 3: Calculadora simples - escreva um programa que implemente uma calculadora simples com operações de adição, subtração, multiplicação e divisão

// let num1 = 3
// let num2 = 2
// let calc = 1
// if(calc === 1){
//     console.log(num1 + num2)
// } else if(calc === 2){
//     console.log(num1 - num2)
// } else if(calc === 3){
//     console.log(num1 * num2)
// } else if(calc === 4){
//     console.log(num1 / num2)
// }

// OU

// const prompt = require('prompt-sync')()
// let num1 = Number(prompt('Insira o primeiro valor: '))
// let num2 = Number(prompt('Insira o segundo valor: '))
// let operation = prompt('Informe a operação desejada (+, -, /, *): ')
// let result = 0

// if(operation === '+'){
//     result = num1 + num2
// } else if(operation === '-'){
//     result = num1 - num2
// } else if(operation === '*'){
//     result = num1 * num2
// } else if(operation === '/'){
//     if(num2 !== 0){
//         result = num1 / num2 
//     } else {
//         console.log('Erro: divisão por zero.')
//         result = undefined
//     }
// } else{
//     console.log('Operação inválida.')
//     result = undefined
// }
// if(result !== undefined){
//     console.log('Resultado: ', result)
// }


// contatenação pode ser feita de outra forma:
// console.log('Resultado: '+ result)


// let option = 1
// switch(option){
//     case 1:
//         console.log('Você selecionou a primeira opção')
        
//     case 2:
//         console.log('Você selecionou a segunda opção')
//         break
//     default:
//         console.log('Você não escolheu alguma opção')
// }

// EXERCÍCIO 1 - AULA 6

// const prompt = require('prompt-sync')()

// let dia = prompt('Defina o dia da semana (1=domingo; 2=segunda; 3=terça; 4=quarta; 5=quinta; 6=sexta; 7=sábado): ')
// let diaInt = Number(dia)
// let retornoDia = ''

// switch(diaInt){
//     case 1:
//         retornoDia = 'domingo'
//         break
//     case 2:
//         retornoDia = 'segunda'
//         break
//     case 3:
//         retornoDia = 'terça'
//         break
//     case 4:
//         retornoDia = 'quarta'
//         break
//     case 5:
//         retornoDia = 'quinta'
//         break
//     case 6:
//         retornoDia = 'sexta'
//         break
//     case 7:
//         retornoDia = 'sábado'
//         break
//     default:
//         retornoDia = 'dia inválido'
//         break
// }
// console.log('O dia selecionado é: ' + retornoDia)


// EXERCÍCIO 2 - AULA 6

// const prompt = require('prompt-sync')()

// console.log('Janeiro (1)')
// console.log('Fevereiro (2)')
// console.log('Março (3)')
// console.log('Abril (4)')
// console.log('Maio (5)')
// console.log('Junho (6)')
// console.log('Julho (7)')
// console.log('Agosto (8)')
// console.log('Setembro (9)')
// console.log('Outubro (10)')
// console.log('Novembro (11)')
// console.log('Dezembro (12)')

// let mes = parseInt(prompt('Informe número do mês para saber quantidade de dias: '))

// switch(mes){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log('Este mês possui 31 dias.')
//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log('Este mês possui 30 dias.')
//         break
//     case 2:
//         console.log('Este mês possui 28 dias.')
//         break
//     default:
//         console.log('Este mês não existe.')
//         break
// }
