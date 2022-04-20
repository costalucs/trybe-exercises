// * 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};
//   console.table(info2)
// console.log(`Bem vinda, ${info.personagem}!`);
//  *  Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e,
// * em seguida, imprima o objeto no console. Valor esperado no console:
info.recorrente = "Sim";
// console.table(info)
// * Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// for (const key in info) {
//     console.log(key);
// }
// * Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// for (const key in info) {
//   if (key === "recorrente") {
//     console.log("Ambos recorrentes");
//   } else {
//     console.log(info[key] + " e " + info2[key]);
//   }
// }

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};
// * 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , 
// * e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
