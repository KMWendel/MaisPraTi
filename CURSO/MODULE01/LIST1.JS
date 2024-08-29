// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

// const prompt = require('prompt-sync')()

// const num1 = Number(prompt('Digite um número: '))

// if(num1 % 2 === 0){
//     console.log('O número é par!')
// } else if (num1 % 2 === 1) {
//     console.log('O número informado é impar!')
// } else {
//     console.log('Erro! Informe um número.')
// }



// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

// const prompt = require('prompt-sync')()

// let age = Number(prompt('Informe sua idade: '))

// if(age >= 0 && age <= 10){
//     console.log('Você é uma criança!')
// } else if(age >= 11 && age <= 18){
//     console.log('Você é um adolescente!')
// } else if(age >= 19 && age <= 60){
//     console.log('Você é um adulto!')
// }  else {
//     console.log('Você pode estacionar na vaga de idoso!')
// }



// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// const prompt = require('prompt-sync')()

// let grade = Number(prompt('Informe a nota do aluno: '))

// if(grade >= 0 && grade < 5){
//     console.log('Reprovado!')
// } else if(grade >= 5 && grade < 7){
//     console.log('Recuperação!')

// } else if(grade >= 7 && grade <= 10){
//     console.log('Aprovado!')
// } else {
//     console.log('Nota inválida!')
// }



// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

// const prompt = require('prompt-sync')()

// let option = Number(prompt('Informe a opção que você deseja: '))

// switch(option){
//     case 1:
//         console.log('Você selecionou a primeira opção!')
//         break
//     case 2:
//         console.log('Você selecionou a segunda opção!')
//         break
//     case 3:
//         console.log('Você selecionou a terceira opção!')
//         break
//     default:
//         console.log('Você não escolheu alguma opção!')
// }



// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

// const prompt = require('prompt-sync')()

// let weight = Number(prompt('Informe seu peso em quilos: '))
// let height = Number(prompt('Informe sua altura em metros: '))
// let imc = weight / height ** 2
// console.log(`Seu IMC é: ${imc}`)


// if(imc <= 18.5){
//     console.log('Você está abaixo do peso normal!')
// } else if(imc >= 18.6 && imc <= 24.9){
//     console.log('Você está com peso normal!')
// } else if(imc >= 25 && imc <= 29.9){
//     console.log('Você está com sobrepeso!')
// } else {
//     console.log('Você está com obesidade!')
// }



// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

// const prompt = require('prompt-sync')()

// let sideA = Number(prompt('Informe o tamanho do lado A do triângulo: '))
// let sideB = Number(prompt('Informe o tamanho do lado B do triângulo: '))
// let sideC = Number(prompt('Informe o tamanho do lado C do triângulo: '))

// if(sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB){
//     if( sideA === sideB && sideA === sideC && sideB === sideC){
//         console.log('Triângulo equilátero')
//     } else if( sideA !== sideB && sideB !== sideC && sideA !== sideC){
//         console.log('Triângulo escaleno')
//     } else {
//         console.log('Triângulo isósceles')
//     }
// } else {
//     console.log('Medidas inválidas!')
// }



// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// const prompt = require('prompt-sync')()

// let quantity = parseInt(prompt('Informe a quantidade de maçãs que você deseja comprar: '))
// let value = 0

// if(quantity < 12 && quantity > 0){
//     value = quantity * 0.3
// } else if(quantity >= 12){
//     value = quantity * 0.25
// } else {
//     value = undefined
// }
// if(value !== undefined){
//     console.log(`O valor das maçãs é de R$ ${value}`)
// } else {
//     console.log('Quantidade inválida!')
// }



// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

// const prompt = require('prompt-sync')()

// let num1 = Number(prompt('Informe o primeiro valor: '))
// let num2 = Number(prompt('Informe o segundo valor: '))

// if(num1 !== num2){
//     if( num1 > num2){
//         console.log(num2, num1)
//     } else {
//         console.log(num1, num2)
//     }
// } else {
//     console.log('Números iguais!')
// }



// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

// for (let i = 10; i >= 1; i--){
//     console.log(i)
// }



// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// const prompt = require('prompt-sync')()

// let num1 = parseInt(prompt('Informe um número inteiro: '))

// for(let count = 0; count < 10; count++){
//     console.log(num1)
// }


// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

// const prompt = require('prompt-sync')()

// let num1 = Number(prompt('Informe o primeiro valor: '))
// let num2 = Number(prompt('Informe o segundo valor: '))
// let num3 = Number(prompt('Informe o terceiro valor: '))
// let num4 = Number(prompt('Informe o quarto valor: '))
// let num5 = Number(prompt('Informe o quinto valor: '))
// let sum = 0
// let arr = [num1, num2, num3, num4, num5]

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(`A soma dos cinco valores é ${sum}`)



// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

// const prompt = require('prompt-sync')()

// let num1 = parseInt(prompt('Qual valor você deseja saber a tabuada? '))

// for(let i = 1; i <= 10; i++){
//     console.log(`${num1} * ${i} = ${num1 * i}`)
// }



// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// const prompt = require('prompt-sync')()

// let num = Number(prompt('Informe um número: '))
// let sum = 0
// let count = 0

// while( num !== 0){
//     sum += num
//     count++
//     num = Number(prompt(`Informe outro número: `))
// }
// console.log('A média aritmética dos números informados é:', sum / count)



// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

// const prompt = require('prompt-sync')()

// let num = parseInt(prompt('Informe um número para cálculo do fatorial: '))
// let fatorial = 1

// while( num > 0 ){
//     fatorial *= num
//     num--
// }
// console.log(fatorial)



// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

// let num1 = 0
// console.log(num1)

// let num2 = 1
// console.log(num2)

// for(let i = 0; i <= 7; i++){
//     let num3 = num1 + num2
//     console.log(num3)
//     num1 = num2
//     num2 = num3
// }
