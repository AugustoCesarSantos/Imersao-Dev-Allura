// este bloco  é criado uma Var numSecreto recebendo um numero randomizado inteiro
// OBS. todos os console.log sao ssomente para testes de verificacao da funcionalidade do codigo
var numSecreto = parseInt(Math.random() * 11);
console.log(numSecreto); //apenas testes no console para verificar a criacao do numero 
var cont = 0; //criacao de variavel para atrubuir um contador de vezes jogadas 
console.log(cont); //apenas testes no console para verificar o contador

//bloco que chama a funcao do jogo
function Chutar() {
  
  /* bloco do-while que pega o palpite do jogador, estabelece o local de impressao do resultado e possivel dica de jogo
  contador para contar cada jogada e gatilho corretor pois nao consegui fazer o contador funcionar corretamente ele pulava do 1 direto para o 3 na segunda jogada*/
  do {
    var chute = parseInt(document.getElementById("valor").value);
    var resultadoJogo = document.getElementById("resultado");
    var dicaJogo = document.getElementById("dica");
    cont ++;
    acumulador = cont-2 // gatilho corretor de contagem 
  } while (chute != numSecreto && cont <3); // razao que satisfaz o Loop
  
        if (chute != numSecreto && acumulador > 3) {
          resultadoJogo.innerHTML = "Fim de jogo! Voce esgostou o numero de tentativas! O número secreto era " + numSecreto;
          dicaJogo.innerHTML = " "
        } // estabelece o encerramento do jogo apos a 3 rodada.

        else if (chute == numSecreto) {
          resultadoJogo.innerHTML = "Acertou! Parabéns";
          console.log("Acertou!");
          dicaJogo.innerHTML = " "
        } // estabelece o ganhador
  
        else if (chute < 0 || chute > 10) {
          resultadoJogo.innerHTML = "Favor insira um número entre 0 e 10!"; // estabelece fora dos parametros e conta +1 jogada
          console.log("Favor insira um número entre 0 e 10!");
          console.log(acumulador);//apenas testes no console para verificar o contador

        } else { // estabelece resposta errada + dica
          console.log("Errado, tente novamente!");
          console.log(acumulador);//apenas testes no console para verificar o contador
          if (chute > numSecreto){
            resultadoJogo.innerHTML = "Errado, tente novamente!";
            dicaJogo.innerHTML = "Dica: o Número Secreto é menor do que o seu palpite!"; 
          };
          if (chute < numSecreto){
            resultadoJogo.innerHTML = "Errado, tente novamente!";
            dicaJogo.innerHTML = "Dica: o Número Secreto é maior do que o seu palpite!";
          };

        }
 
}
   


