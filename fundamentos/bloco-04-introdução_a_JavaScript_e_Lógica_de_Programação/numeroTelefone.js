let arrNumber = [1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1];
function generatePhoneNumber(arrNumber) {
  // verificando o tamanho do array
  // verificando o tamanho do array
  // verificando o tamanho do array
  if (arrNumber.length != 11) {
    // console.log('Array com tamanho incorreto.');
    return "Array com tamanho incorreto.";
  }
  for (let index of arrNumber) {
    if (index < 0 || index > 9)
      return `não é possível gerar um número de telefone com esses valores`;
  }

  let contador = 0;
  let repeticao;
  let numero;
  let limite ;
  /* verificando se tem numero repetido e quantas vezes se repete */
  for (let i in arrNumber) {
    numero = arrNumber[i];
    contador = 0;
    for (let j in arrNumber) {
      if (arrNumber[j] === numero) {
        contador++;
        if (contador > 2) {
          limite = true;
        }
      }
    }
  }
  console.log(`Numero repete 3 ou mais vezes: ${repeticao}`);
  if (limite == true) {
    return `não é possível gerar um número de telefone com esses valores`;
  } else {
    return `(${arrNumber[0]}${arrNumber[1]}) ${arrNumber[2]}${arrNumber[3]}${arrNumber[4]}${arrNumber[5]}${arrNumber[6]}-${arrNumber[7]}${arrNumber[8]}${arrNumber[9]}${arrNumber[10]}`;
  }
}

generatePhoneNumber(arrNumber);
