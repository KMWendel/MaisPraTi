// let thingsList = Array()

// thingsList['hardware'] = Array()
// thingsList['fruits'] = Array()
// thingsList['Pessoas'] = Array('Aristóteles', 'Tolkien')

// thingsList['hardware'][0] = 'Notebook'
// thingsList['hardware'][1] = 'Mouse'
// thingsList['hardware'][2] = 'Teclado'
// thingsList['fruits'][0] = 'Laranja'
// thingsList['fruits'][1] = 'Maça'


// console.table(thingsList)

// Ordenar frutas em ordem alfabética (sort)

// let fruitsList = Array()

// fruitsList[0] = 'Maça'
// fruitsList[1] = 'Banana'
// fruitsList[2] = 'Melancia'
// fruitsList[3] = 'Uva'
// fruitsList[4] = 'Morango'

// // console.log(fruitsList.indexOf('Morango'))

// let index = fruitsList.indexOf('Morango')

// if(index === -1){
//     console.log('Elemento não existe')
// } else {
//     console.log(`O elemento existe e está na posição: ${index}`)
// }

// indexOf retorna a posição que o argumento está. se o argumento não existir ele retorna -1. se elemento for repetido
//  mostra apenas a primeira posição 

// console.log(fruitsList.sort())


// let numberList = []

// numberList[0] = 10
// numberList[1] = 12
// numberList[2] = 0
// numberList[3] = 16
// numberList[4] = 7
// numberList[5] = 9

// console.log(numberList.sort((a, b) => a - b))


// Funções servem para evitar redundancia de código; sempre retorna algo (valor, string, obrjeto)
// Funções que não retornam nada chamam-se procedimento

// Escopo global: variavel funciona em qualquer lugar (var). 
// var dentro de função vira escopo função
// Escopo de função: variavel só existe dentro da função
// Escopo de bloco: variaveis criadas (só existem) dentro de estruturas condicionas (if, switch)

// function calculateLandArea(num1, num2){
//     let area = num1 * num2
//     return area
// }

// let width = 10
// let height = 200

// let area = calculateLandArea(width, height)

// console.log(`A área possui ${area} metros quadrados`)



// 1. ECERCÍCIO - Fazer função que ordene alfabeticamente o array

let alfabeto = ['a', 'd', 'c', 'b', 'f']

function ordena(arrayASerOrdenado){
    return arrayASerOrdenado.sort()
}

console.log(ordena(alfabeto))
