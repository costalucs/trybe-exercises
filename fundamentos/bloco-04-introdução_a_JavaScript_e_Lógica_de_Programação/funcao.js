// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// let word = "tryber";
// function palindromo(s) {
//   var o = "";
//   for (var i = s.length - 1; i >= 0; i--) {
//     o += s[i];
//   }
//   if (s === o) {
//     console.log("É palidromo");
//     return true;
//   } else {
//     console.log("Não é palindromo");
//     return false;
//   }
// }
// palindromo("arara");

// Divida a palavra em um array, salvando-a em uma variável.
// Inverta o array.
// Monte de novo.
// Compare a string inicial com a reversa.

// function checkPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
//   if(str === reversed) {
//       console.log('É palindromo');
//   } else {
//       console.log('Não é palindromo');
//   }

// }

// checkPalindrome('arara')

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// function maiorValor(numbers) {
//     maiorNum = Math.max(...numbers)
//     console.log(maiorNum);
// }
// maiorValor(numbers)
// function maiorValor(numbers) {
//   let maior = 0;
//   for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] > maior) {
//       maior = numbers[index];
//     }
//   }
//   console.log(maior);
// }

// maiorValor(numbers);

// * Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// function maiorValor(numbers) {
//     maiorNum = Math.min(...numbers)
//     console.log(maiorNum);
// }
// maiorValor(numbers)
// function menorValor(numbers) {
//   let menor = numbers[0];
//   for (let index = 0; index < numbers.length; index++) {
//     if (menor > numbers[index]) {
//       menor = numbers[index];
//     }
//   }
//   console.log(menor);
// }
// menorValor(numbers)

// * Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
let newArray = [];

function stringsMaisCompridas(arr) {
  var tamanhoWord = 0;
  for (var i = 0; i < nomes.length; i++) {
    if (tamanhoWord < nomes[i].length) {
      tamanhoWord = nomes[i].length;
    }
  }
  for (var j = 0; j < nomes.length; j++) {
    if (nomes[j].length == tamanhoWord) {
      newArray.push(nomes[j]);
    }
  }
  if (newArray.length == 1) {
    return newArray[0];
  } else {
    return newArray;
  }
}
stringsMaisCompridas(nomes);
console.log(newArray);
