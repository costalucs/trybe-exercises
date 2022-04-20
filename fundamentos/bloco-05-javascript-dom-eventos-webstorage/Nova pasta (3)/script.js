function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
function createDays() {
  let dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let listaDias = document.getElementById("days");
  for (let i = 0; i < dezDaysList.length; i++) {
    let dias = dezDaysList[i];
    // console.log(dias);
    let li = document.createElement("li");
    li.innerText = dias;
    li.classList = "day";
    listaDias.appendChild(li);

    dias.addEventListener("mouseHover", () => {});

    if (dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31) {
      li.classList.add("holiday");
    }
    if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18 ||
      dezDaysList[i] === 25
    ) {
      li.classList.add("friday");
    }
  }
}

function criarBotao(nomeBotao) {
  let divBotao = document.querySelector(".buttons-container");
  let botao = document.createElement("button");
  let idBotao = "btn-holiday";
  // console.log(divBotao);
  botao.innerHTML = nomeBotao;
  botao.classList = "buttons-container";
  botao.id = idBotao;
  divBotao.appendChild(botao);
}

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function mostrarFeriados() {
  // definir botao, classe, cores
  let botao = document.querySelector("#btn-holiday");
  let feriados = document.querySelectorAll(".holiday");
  let corOriginal = "rgb(238, 238, 238)";
  let novaCor = "red";

  botao.addEventListener("click", function () {
    for (let index = 0; index < feriados.length; index += 1) {
      if (feriados[index].style.backgroundColor === novaCor) {
        feriados[index].style.backgroundColor = corOriginal;
      } else {
        feriados[index].style.backgroundColor = novaCor;
      }
    }
  });
}

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
function sextou(botaoSexta) {
  let divBotao = document.querySelector(".buttons-container");
  let criarBotao = document.createElement("button");
  let idBotao = "btn-friday";
  criarBotao.id = idBotao;
  criarBotao.innerHTML = botaoSexta;
  divBotao.appendChild(criarBotao);
}
function mostrarSexta() {
  let botaoSexta = document.getElementById("btn-friday");
  let listaSextas = document.querySelectorAll(".friday");
  let textoSexta = "Sextou!!!";
  botaoSexta.addEventListener("click", () => {
    for (let i = 0; i < listaSextas.length; i++) {
      if (listaSextas[i].innerHTML !== textoSexta) {
        listaSextas[i].innerHTML = textoSexta;
      } else {
        listaSextas[i].innerHTML = arraySexta[i];
      }
    }
  });
}

criarBotao("Feriados");
createDaysOfTheWeek();
createDays();
mostrarFeriados();
sextou("Sexta-feira");
let arraySexta = [4, 11, 18, 25];
mostrarSexta();

// Escreva seu código abaixo.
