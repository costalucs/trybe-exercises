let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// * 1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element);
// }
// * 2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//  let soma = 0
// for (let index = 0; index < numbers.length; index++) {
//    soma += numbers[index]
// }
// console.log(soma)
// * 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let soma = 0
// for (let index = 0; index < numbers.length; index++) {
//    soma += numbers[index]
// }
// let media = soma / numbers.length
// console.log(media);
// * A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// * 4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let soma = 0
// for (let index = 0; index < numbers.length; index++) {
//    soma += numbers[index]
// }
// let media = soma / numbers.length
// console.log(media);
// if (media > 20) {
//     console.log('Valor maior que 20!');
// } else {
//     console.log('Valor menor que 20!');
// }
// * Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let maior = 0;
// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] > maior) {
//     maior = numbers[index];
//   }
// }
// console.log(maior);
// * Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] % 2 === 0) {
//     console.log('IMpar');
//   } else {
//     console.log('par');
//   }
// }
// * Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let menor = numbers[0]
// for (let index = 0; index < numbers.length; index++) {
//   if (menor > numbers[index]) {
//     menor = numbers[index];
//   }
// }
// console.log(menor);
var array = [];

// * Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
for (let i = 1; i <= 25; i = i + 1) {
  // console.log(i);
  array.push(i);
}
console.log(array);
// * Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let j = 1; j < array.length; j++) {
  console.log(`${array[j]} dividido ${2}`, array[j] / 2);
}


