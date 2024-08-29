const prompt = require('prompt-sync')()


// EXERCÍCIO 1

// const num1 = Number(prompt('Digite um número: '))

// if(num1 > 0){
//     console.log('O número é positivo!')
// } else if (num1 < 0) {
//     console.log('O número informado é negativo!')
// } else if (num1 === 0) {
//     console.log('O número informado é zero!')
// } else {
//     console.log('Erro! Informe um número')
// }


// EXERCÍCIO 2

// const year = Number(prompt('Informe um ano: '))

// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`O ano ${year} é bissexto.`)
// } else {
//     console.log(`${year} não é um ano bissexto.`)
// }


// EXERCÍCIO 3  - revisar

// let grade1 = Number(prompt('Informe a primeira nota: '))
// let grade2 = Number(prompt('Informe a segunda nota: '))
// let grade3 = Number(prompt('Informe a terceira nota: '))

// let avg = (grade1 + grade2 + grade3)/3
// let concept

// if(avg >= 90){
//     console.log(`A média das notas é ${avg.toFixed(2)}`)
//     concept = 'A'
// } else if(avg <= 80){
//     console.log(`A média das notas é ${avg.toFixed(2)}`)
//     concept = 'B'
// } else {
//     console.log('É outra nota.')
// }
// console.log('O conceito do aluno é: ' + concept)


// EXERCÍCIO 9 - revisar

let age = Number(prompt('Informe sua idade: '))
let ageRange

if(age >= 0 && age <= 12){
    ageRange = console.log('Criança')
} else if(age >= 13 && age <= 17){
    ageRange = console.log('Adolescente')
} else if(age >= 18 && age <= 60){
    ageRange = console.log('Adulto')
} else {
    ageRange = console.log('Idade inválida')
}

// switch(ageRange){
//     case 'Criança':
//         console.log('Você é uma criança!')
//         break
//     case 'Adolescente':
//         console.log('Você é um adolescente!')
//         break
//     case 'Adulto':
//         console.log('Você é um adulto!')
//         break
//     default:
//         console.log('Idade inválida!')
// }


// EXERCÍCIO 10

// let num1 = Number(prompt('Informe o primeiro valor: '))
// let num2 = Number(prompt('Informe o segundo valor: '))

// let a = num1
// let b = num2

// do {
//     let temp = b
//     b = a % b
//     a = temp
// } while(b !== 0)

// const MDC = a
// console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)


// EXERCÍCIO AULA 07

// let count = 0
// let num = 101

// do {
//     let primo = 0
//     for(let i = 1; i <= num; i++){
//         if(num % i === 0){
//             primo++
//         }
//     }
//     if(primo === 2){
//         console.log(num)
//         count++
//     }
//     num++
// } while(count < 50)


// VETORES OU ARREY - MDN WEB DOCS
// estrutura de dados linear que aloca na memória um espaço 
// delimitado de valores (tipados - não no JS)

// let carros = Array()

// carros[0] = 'Civic'
// carros[1] = 10
// carros[2] = true
// carros['Karol'] = '10'

// let motos = Array('CBR', 'Ninja', 10)
// let livros = ['Senhor dos anéis', 'O Hobbit', 'Harry Potter']

// livros.push('Sherlock Holmes')
// // push adiciona no final

// livros.unshift('1984')
// // unsshift adiciona no início

// livros.pop()
// // exclui último

// livros.shift()
// // exclui primeiro

// // livros.splice(2)
// // deleta valores a partir da posição 2

// // livros.splice(2, 0, 'Animais Fantásticos')
// // Adiciona valor na segunda posição

// livros.splice(2, 1, 'Animais Fantásticos')
// // Substitui valor da segunda posição

// // deleta valores a partir da posição 2



// console.log(livros)