console.clear();
const prompt = require("prompt-sync")();

// ---------------------------------------- //

do {
  let escolhaBot = 0;
  let escolhaUser = "";
  let contador = 1;
  let pontBot = 0;
  let pontUser = 0;
  const opcao = ["pedra", "papel", "tesoura"];

  console.log("Bem-vindo(a) ao Jokenpô!");
  let nome = prompt("Para iniciarmos digite seu nome: ").toUpperCase();
  console.clear();

  console.log(`Vamos jogar Jokenpô ${nome}! É simples, apenas digite
pedra, papel ou tesoura!`);

  console.log();

  console.log(`Quantas rodadas você deseja jogar? `);
  let rodadas = +prompt("");

  console.clear();

  console.log(`É simples, apenas digite pedra, papel ou tesoura!`);
  console.log();

  for (rodadas; rodadas >= contador; contador++) {
    console.log(`${contador}ª rodada! `);

    do {
      escolhaBot = Math.floor(Math.random() * 3);
      escolhaUser = prompt("").toLowerCase();

      escolhaUser = opcao.indexOf(escolhaUser);
      console.clear();
      if (escolhaUser == -1) {
        console.log("Comando não reconhecido, tente novamente!");
      }
    } while (escolhaUser == -1);

    if (escolhaUser == 0) {
      if (escolhaBot == 0) {
        console.log(`${contador}ª rodada: Empate!`);
        console.log("");
      } else if (escolhaBot == 1) {
        console.log(`${contador}ª rodada: Derrota!`);
        pontBot++;
        console.log("");
      } else {
        console.log(`${contador}ª rodada: Vitória!`);
        pontUser++;
        console.log("");
      }
    } else if (escolhaUser == 1) {
      if (escolhaBot == 1) {
        console.log(`${contador}ª rodada: Empate!`);
        console.log("");
      } else if (escolhaBot == 2) {
        console.log(`${contador}ª rodada: Derrota!`);
        pontBot++;
        console.log("");
      } else {
        console.log(`${contador}ª rodada: Vitória!`);
        pontUser++;
        console.log("");
      }
    } else {
      if (escolhaBot == 2) {
        console.log(`${contador}ª rodada: Empate!`);
        console.log("");
      } else if (escolhaBot == 0) {
        console.log(`${contador}ª rodada: Derrota!`);
        pontBot++;
        console.log("");
      } else {
        console.log(`${contador}ª rodada: Vitória!`);
        pontUser++;
        console.log("");
      }
    }
  }

  console.clear();

  console.log("------------------------------------------------------");
  if (pontBot > pontUser) {
    console.log("O grande vencedor é o COMPUTADOR!");
  } else if (pontBot < pontUser) {
    console.log(`O grande vencedor é você ${nome}!`);
  } else {
    console.log("Houve um empate!");
  }
  console.log("------------------------------------------------------");

  console.log("------------------------------------------------------");
  console.log("");
  console.log(`Pontuação ${nome}: ${pontUser}`);
  console.log("");
  console.log(`Pontuação computador: ${pontBot}`);
  console.log("");
  console.log("------------------------------------------------------");

  var reiniciar = prompt("Deseja reiniciar o jogo? ").toLowerCase();

  console.clear();
} while (reiniciar == "sim");

console.log("------------------------------------------------------");
console.log();
console.log(`Obrigado por jogar!`);
console.log();
console.log("------------------------------------------------------");
