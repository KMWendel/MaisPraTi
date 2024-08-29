// Funções anônimas não tem nome - deve ser envelopada em uma variável - para situações que não demandam retorno 
// função parametrisada chama call back (função dentro de função) - função que embrulha = wrapper

// let teste = function () {
//     console.log('Olá mundo!')
// }

// teste()


// function showFunction(successCallback, errorCallback) {
//     if(true) {
//         successCallback("Requisição bem sucedida")
//     } else {
//         errorCallback("Erro na requisição")
//     }
// }

// let successCallback = function(message) {
//     console.log(message)
// }

// let errorCallback = function(message) {
//     console.error(message)
// }

// // outra maneira de representar função anonima:
// // let errorCallback = (message) => {
// //     console.log(message)
// // }

// showFunction(successCallback, errorCallback)


// 1. EXERCÍCIO (aula 9) - Fazer a soma dos elementos de um Array COM FUNÇÃO

// let arrSum = function(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// let arr1 = [10, 20, 30, 40]
// let sum1 = arrSum(arr1)

// console.log(sum1)

// Poderia começar de outra maneira:
// function arrSun(arr){



// 2. EXERCÍCIO (aula 9) - Encontre o maior número em um array COM FUNÇÃO

// let arr = [10, 20, 30, 40]

// function findMax(arr){
//     let max = arr[0]
//     for(let j = 0; j < arr.length; j++){
//         if(arr[j] > max){
//             max = arr[j]
//         }
//     }
//     return max
// }
// console.log(findMax(arr))



// 5. EXERCÍCIO (aula 9) - Contar as ocorrências de um determinado valor no arrey COM FUNÇÃO

// const prompt = require('prompt-sync')()
// let vet = [10, 10, 7, 5, 10]
// let value = Number(prompt('Insira o valor a ser pesquisado: '))

// function findAmount(value, vet){
//     let count = 0
//     for(let l = 0; l < vet.length; l++){
//         if(vet[l] === value){
//             count++
//         }
//     }
//     return count
// }

// console.log(`O valor ${value} ocorre ${findAmount(value,vet)} vezes no vetor.`)



//METODOS DE STRING

// let nome = "Jaques"

// console.log("Jaques".length)
// // retorna comprimento da string
// console.log("Jaques".charAt(0))
// // retorna valor na posição 0 (J)
// console.log(nome.indexOf('q'))
// // retorna posição da letra q
// console.log(nome.replace('Jaques', 'Hyago'))
// // troca string - ou partes da string

// let nome = "Equipe Olímpica"

// console.log(nome.substr(7, 8))
// //extrai uma parte - a partir da setima posição quero ficar com 8 posições
// console.log(nome.toUpperCase())
// //retorna em letras maiuscula
// console.log(nome.toLowerCase())
// //retorna em letras minuscula
// console.log(nome.trim())
// //retirar espaçoes em branco das extremidades


// METODOS MATEMATICOS

// console.log(Math.ceil(100.73))
// // arredonda para cima
// console.log(Math.floor(100.73))
// // arredonda para baixo
// console.log(Math.round(100.73))
// // arredonda do meio para baixo, para baixo; do meio para cima, para cima
// console.log(Math.sqrt(100))
// // raiz
// console.log(Math.cbrt(100))
// // raiz cubica
// console.log(Math.pow(100, 2))
// // potancia
// console.log(Math.abs(100.20))
// // numero absoluto
// console.log(Math.random())
// // gera numero aleatorio entre 0 e 1


// DATAS - precisa ser inicializada

// let date = new Date()

// console.log(date.getDate())
// // dia atual do usuario
// console.log(date.getMonth() + 1)
// // mes atual (deve ser somado 1)
// console.log(date.getFullYear())
// // ano atual do usuario
// console.log(date.getDate() + 700)
// // somar dias na data
// date.setDate(date.getDate() + 700)
// console.log(date.toString())
// // muda a data (pode mudar ano e mes)

// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// // console.log(date1.toString())

// // console.log(date1.getTime())
// // console.log(date2.getTime())
// // Mostra quantidade de milisegundos de 1970 até hoje

// let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
// console.log(miliseconds_between_dates)

// let miliseconds_per_day = (1 * 24 * 60 * 60 * 1000)
// console.log(miliseconds_per_day)

// console.log(Math.ceil(miliseconds_between_dates/miliseconds_per_day))
// // diferença entre as datas


// 1. EXERCÍCIO - Inveter uma string com função
// 2. EXERCÍCIO - Contar vogais com uma função
// 3. EXERCÍCIO - Gerar numero aleatorio com uma funçao
// 4. EXERCÍCIO - Dias entre duas datas com uma funçao
// 5. EXERCÍCIO - Formatar data com uma funçao