// 2)
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.


// let num = 0;

// for (let i = 2; i <= 150; i += 1) {
//   if (i % 3 === 0) {
//     num += 1;
//   }
//   if (num === 50) {
//     console.log('mensagem secreta');
//   }
// }


// 3)
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 


// let jogo = ['pedra', 'papel', 'tesoura']
// let jog1 = jogo[1];
// let jog2 = jogo[0];

// if (jog1 === jog2) {
//   console.log('A Tie');
// }
// else if (jog1 === jogo[0] && jog2 === jogo[1]) {
//   console.log('Player 2 won');
// }
// else if (jog1 === jogo[1] && jog2 === jogo[2]) {
//   console.log('Player 2 won');
// }
// else if (jog1 === jogo[2] && jog2 === jogo[0]) {
//   console.log('Player 2 won');
// }
// else {
//   console.log('Player 1 won');
// }


// 4)
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.


// let idade = 19;
// let cnh = idade >= 18;

// if (cnh === true) {
//   console.log('A pessoa é maior de idade');
// }
// else {
//   console.log('A pessoa é menor de idade');
// }


// 5) 
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let carolzita = 22;
let murilo = 33;
let baeta = 20;

if (carolzita < murilo && carolzita < baeta) {
  console.log('Carolzita é x mais nove');
}
else if (murilo < carolzita && murilo < baeta) {
  console.log('Murilo é x mais nove');
}
else {
  console.log('Baêta é x mais nove');
}