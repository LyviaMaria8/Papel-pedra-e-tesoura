function escolherJogada() {
  const escolha = prompt("Digite pedra, papel ou tesoura (ou 'parar' para sair):").toLowerCase();
  const opcoes = ["pedra", "papel", "tesoura", "parar"];
  
  if (!opcoes.includes(escolha)) {
    alert("Opção inválida! Tente novamente.");
    return escolherJogada();
  }

  return escolha;
}

function jogadaDoBot() {
  const escolhas = ["pedra", "papel", "tesoura"];
  const aleatorio = Math.floor(Math.random() * escolhas.length);
  return escolhas[aleatorio];
}

function resultadoRodada(jogador, bot) {
  if (jogador === bot) {
    return "Empatou!";
  }

  const venceu = 
    (jogador === "pedra" && bot === "tesoura") ||
    (jogador === "tesoura" && bot === "papel") ||
    (jogador === "papel" && bot === "pedra");
  return venceu ? "Você ganhou!" : "O bot venceu!";
}

function rodada() {
  const jogador = escolherJogada();
  if (jogador === "parar") {
    alert("Você saiu do jogo. Até logo!");
    return false;
  }

  const bot = jogadaDoBot();
  alert(`Você escolheu: ${jogador}\nO bot escolheu: ${bot}`);
  alert(resultadoRodada(jogador, bot));
  return true;
}

function comecarPartida() {
  alert("Vamos jogar Pedra, Papel ou Tesoura!");
  while (rodada()) {
  }
}