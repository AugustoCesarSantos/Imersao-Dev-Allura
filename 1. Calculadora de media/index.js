
// recebendo os emelmentos do fomrulario HTML e salvando nas constantes//
function calculoMedia() {
    const name = document.getElementById('name').value;
    const nota1 = document.getElementById('notaPrimeiroBimestre').value; 
    const nota2 = document.getElementById('notaSegundoBimestre').value;
    const nota3 = document.getElementById('notaTerceiroBimestre').value;
    const nota4 = document.getElementById('notaQuartoBimestre').value;
  
  // trnsformacao dos dados String para Float, de forma a poder calcular as médias//
    var notaPim = parseFloat (nota1);
    var notaSeg = parseFloat(nota2);
    var notaTer = parseFloat(nota3);
    var notaQuart = parseFloat (nota4);
  
  //Calculo da média final e diminuicao do numero de casas decimais para apenas duas. 
  //Bem como, validacao dos valores para calculo de Aprovacao, mostrando o resultado 
  //calculado no segundo botao emitir resultado//  
    var notaFinal = (((notaPim + notaSeg + notaTer + notaQuart)/4).toFixed(1));
      if (notaFinal >= 5) {
        document.getElementById('button2').onclick = function () {
            alert("✅ Parabéns! " + name + ", voce foi APROVADO! Sua média final foi " + notaFinal);
        };
       console.log ("✅ Parabéns! "+name+ ", voce foi APROVADO! Sua média final foi " +notaFinal);
        }
        else {
        document.getElementById('button2').onclick = function () {
            alert("❌ Sinto muito " + name + ", mas voce foi REPROVADO! Sua média final foi " + notaFinal);
        };
          console.log ("❌Sinto muito "+name+ ", mas voce foi REPROVADO! Sua média final foi " +notaFinal);
        }
      
  }