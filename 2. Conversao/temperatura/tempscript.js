
function Converter () {
    //tratamento dos valores do input, quanto a pessoa quer converter
    var valorElemento = document.getElementById("valor");
    var valorDigitado = valorElemento.value;
    var valorEmNumerico = parseFloat(valorDigitado);

    //escolha da primeira da moeda que a pessoa quer que seja convertida
    var primeiraTemp = document.getElementById("temp1");
    var temperatura1 = primeiraTemp.value;
    
    //escolha da segunda moeda para o qual a pessoa quer que seja convertida
    var segundaTemp = document.getElementById("temp2");
    var temperatura2 = segundaTemp.value;

    /*conversao das moedas, montei uma planilha no excel com a conversao para depois pegar os valores corretos, 
    gostaria de utilizar menos if's e elses, Pensei em utilzar o switch case, acho que o codigo ficaria mais bonito 
    mesmo que a logica fosse a mesma, entretanto sao tantas conversoes que o melhor seria mesmo usar uma base de dados, 
    acho que com algum estudo consegueria, mas quero avancar para os proximos excercicios e proximas aulas, visto que 
    este me tomou muito tempo tanto no html, css e javascript*/

    let tempBase = temperatura1;
    let tempConvert = temperatura2;
    let quantidade= valorEmNumerico;

    // criar switch case, pois nao esta a funionar!!!!!!!!!!!!!!!!
    var conversaoFinal2 = 0;

        if (temperatura1 == ("CEL") && temperatura2 == ("FAR")){
            conversaoFinal2 = ((quantidade *1.8)+32)
        };
        if (temperatura1 == ("CEL") && temperatura2 == ("KEL")){
            conversaoFinal2 = (quantidade +273.15)
        };

        if (temperatura1 == ("FAR") && temperatura2 == ("CEL")) {
            conversaoFinal2 = ((quantidade -32)/1.8)
        };
        if (temperatura1 == ("FAR") && temperatura2 == ("KEL")){
            conversaoFinal2 = ((quantidade+459.67)*1.8)
        };
        if (temperatura1 == ("KEL") && temperatura2 == ("CEL")) {
            conversaoFinal2 = (quantidade -273.15)
        };
        if (temperatura1 == ("KEL") && temperatura2 == ("FAR")){
            conversaoFinal2 = ((quantidade*1.8) -459.67)
        };
    
    var final = conversaoFinal2.toFixed(2)
    

    // testes no console
    console.log(valorEmNumerico);
    console.log(temperatura1);
    console.log(temperatura2);
    console.log (conversaoFinal2);
    console.log (final);

    // imprimir o resultado da conversao na tela
    var conversaoFinal = document.getElementById("valorConvertido");
    var valorConvertido = ""+quantidade+ " graus °"+temperatura1+" são "+ final +" °"+ temperatura2;
    conversaoFinal.innerHTML = valorConvertido

};

