// <variavel>; <condicao>; <incremento>

const prompt = require('prompt-sync')()

let multiplier = Number(prompt("Informe o número que você quer saber a tabuada: "))

for(let counter = 0; counter <= 10; counter++){
    console.log( `${multiplier} * ${counter} = ${multiplier * counter}`)
}

// imprimir os valores pares entre 1 e 20
// for(let i = 0; i <= 20; i += 2){
//     console.log(i)
// }

// calcular a soma dos numeros de 1 a 100.
// let sum = 0
// for(let j = 1; j <= 100; j++){
//     sum += j
// }
// console.log(sum)

// let sum = 0
// let j = 1
// while(j <= 100){
//     sum += j
//     j++
// }
// console.log(sum)

// imprimir os valores de 1 ate 10 em ordem decrescente
// for (let i = 10; i >= 1; i--){
//     console.log(i)
// }

// let i = 10
// while(i >= 1){
//     console.log(i)
//     i--
// }

// fazer um algoritmo para receber numeros decimais ate que o 
// usuario digite 0 e fazer a media aritmetica desses numeros

// let num1 = Number(prompt('primeiro numero: '))
// let counter = 0
// let sum = 0
// while(num1 !== 0){
//     sum += num1
//     counter++
//     num1 = Number(prompt('outro numero: '))
// }
// console.log('A media aritmetica e: ', sum/counter)

// escreva um algoritmo para imprimir os 50 primeiros numeros primos 
// maiores que 100. 


// solicitar numeros ao usuario ate que ele insira um valor negativo

// let num1
// do{
//     num1 = Number(prompt('insira um numero: '))
// } while(num1 > 0)