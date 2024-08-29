// alt z => quebra linha

// let serie = {
//     nome: "The Boys",
//     genero: ["Ação", "Paródia", "Heróis"],
//     nrTemporadas: 4,
//     status:"Em andamento",
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 50,
//     },

//     mostrarCaracteristicas: function() {
//         return `O nome da série é: ${this.nome} e sua classificação é +${this.classificacao}`
//     }
// }
// console.log(serie.mostrarCaracteristicas())


// let livro = {
//     titulo: "O Hobbit",
//     autor: "J. R. R. Tolkien",
//     year: 1925,
//     mostrarCaracteristicas: function() {
//         return (this.titulo + " foi escrito por " + this.autor)
//     }
// }
// console.log(livro.mostrarCaracteristicas())


// em uma função dentro do objeto sempre deve ser colocado return para não retornar undefined (não deve ter console.log dentro de console.log);
// função dentro de objeto  não pode ser função anonima "xxxx() => {" porque transforma o "this" local em global

// let carro = {
//     nome: "Herby",
//     modelo: 'Marea',
//     velocidade: 350,
//     ano: 2005,
//     acelerar: function() {
//         return "Acelerando com pé no porão"
//     }
// }
// console.log(carro)
// console.log(carro.acelerar())

// let motor = "1000"
// let nome = "bmw s1000rr"
// let tipo = "esportivo"

// let moto = {
//     nome: nome,
//     tipo: tipo,
//     motor: motor
// }
// console.log(moto)


// let atleta = {
//     nome: "Rayssa Leal",
//     esporte: "Skate street",
//     idade: 16
// }

// atleta.nacionalidade = 'Brasil'

// atleta.medalhas = {
//     ouro: 10,
//     prata: 1,
//     bronza: 1
// }

// atleta.celebrarVitoria = () => { return "GANHEI!"}

// console.log(atleta)
// console.log(atleta.celebrarVitoria())


// OBJETOS SÃO REFERENCIAS - se atribuir um objeto a uma nova variavel, cria-se uma nova referencia para o objeto original e não uma copia
// constante não significa que não pode mudar o valor. ela nao pode ser reatribuida

// let obj1 = {
//     nome: "Bruce",
//     profissoa: ""
// }

// let obj2 = obj1

// obj2.companheiro = "Robin"

// console.log(obj1)
// console.log(obj2)


// FUNÇAO CONSTRUTORA

// function computador(processador, gpu, ram, armazenamento){
//     this.processador = processador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function() {
//         console.log(`O ${this.processador} está funcionando!`)
//     }

//     this.mostrarEspecificacoes = function() {
//         return `
//             processador: ${this.processador}
//             gpu: ${this.gpu}
//             ram: ${this.ram}
//             armazenamento: ${this.armazenamento}`
//     }
// }
// let pc = new computador("i9", "RTX4090", "16GB", "500GB SSD")
// console.log(pc.mostrarEspecificacoes())



// function jogos(titulo, genero, anoLancamento, empresa){
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa
//     }
// }
// let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft")
// console.log(jogo1)

// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }
// let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft", () => console.log('Jogando'))
// console.log(jogo1.jogar())



// for in (percorre posição - transita por valores do objeto), for of (devolve valores - mais uso em arrays), forEach (especifico para arrays)

// for(let key in jogo1){
//     console.log(`${key}: ${jogo1[key]}`)
// }


// const jogadores = ['Pelé', 'CR7', 'Messi']

// for(let jogador in jogadores){
//     console.log(jogador)
// }

// for(let jogador of jogadores){
//     console.log(jogador)
// }



// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }
// let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft", () => console.log('Jogando'))
// for(let jogo of Object.keys(jogo1)){
//     console.log(jogo1[jogo])
// }


const NOME = 'Silva'

for(let char of NOME){
    console.log(char)
}


