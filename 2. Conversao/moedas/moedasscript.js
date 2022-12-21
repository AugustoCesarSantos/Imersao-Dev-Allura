function Converter () {
    //tratamento dos valores do input, quanto a pessoa quer converter
    var valorElemento = document.getElementById("valor");
    var valorDigitado = valorElemento.value;
    var valorEmNumerico = parseFloat(valorDigitado);

    //escolha da primeira da moeda que a pessoa quer que seja convertida
    var primeiraMoeda = document.getElementById("country");
    var moeda1 = primeiraMoeda.value;
    
    //escolha da segunda moeda para o qual a pessoa quer que seja convertida
    var segundaMoeda = document.getElementById("country2");
    var moeda2 = segundaMoeda.value;

    /*conversao das moedas, montei uma planilha no excel com a conversao para depois pegar os valores corretos, 
    gostaria de utilizar menos if's e elses, Pensei em utilzar o switch case, acho que o codigo ficaria mais bonito 
    mesmo que a logica fosse a mesma, entretanto sao tantas conversoes que o melhor seria mesmo usar uma base de dados, 
    acho que com algum estudo consegueria, mas quero avancar para os proximos excercicios e proximas aulas, visto que 
    este me tomou muito tempo tanto no html, css e javascript*/

    let moedaBase = moeda1;
    let moedaConvert = moeda2;
    let quantidade= valorEmNumerico;

    var conversaoFinal2 = ((quantidade * moedaBase)*moedaConvert);
        if (moeda1 == ("BRL") && moeda2 == ("BRL")) {conversaoFinal2 = (quantidade *1)}
        if (moeda1 == ("BRL") && moeda2 == ("USD")) {conversaoFinal2 = (quantidade *0.19)}
        if (moeda1 == ("BRL") && moeda2 == ("EUR")) {conversaoFinal2 = (quantidade *0.19)}
        if (moeda1 == ("BRL") && moeda2 == ("GBP")) {conversaoFinal2 = (quantidade *0.17)}
        if (moeda1 == ("BRL") && moeda2 == ("ARS")) {conversaoFinal2 = (quantidade *27.47)}
        if (moeda1 == ("BRL") && moeda2 == ("CNY")) {conversaoFinal2 = (quantidade * 1.33)}
        if (moeda1 == ("BRL") && moeda2 == ("JPY")) {conversaoFinal2 = (quantidade * 27.85)}
        if (moeda1 == ("BRL") && moeda2 == ("BTC")) {conversaoFinal2 = (quantidade * 0.000009)}
        if (moeda1 == ("BRL") && moeda2 == ("ETH")) {conversaoFinal2 = (quantidade * 0.000121)}

        if (moeda1 == ("USD") && moeda2 == ("BRL")) {conversaoFinal2 = (quantidade *5.19)}
        if (moeda1 == ("USD") && moeda2 == ("USD")) {conversaoFinal2 = (quantidade *1)}
        if (moeda1 == ("USD") && moeda2 == ("EUR")) {conversaoFinal2 = (quantidade *1)}
        if (moeda1 == ("USD") && moeda2 == ("GBP")) {conversaoFinal2 = (quantidade *0.87)}
        if (moeda1 == ("USD") && moeda2 == ("ARS")) {conversaoFinal2 = (quantidade *142.58)}
        if (moeda1 == ("USD") && moeda2 == ("CNY")) {conversaoFinal2 = (quantidade * 6.93)}
        if (moeda1 == ("USD") && moeda2 == ("JPY")) {conversaoFinal2 = (quantidade * 144.57)}
        if (moeda1 == ("USD") && moeda2 == ("BTC")) {conversaoFinal2 = (quantidade * 0.000048)}
        if (moeda1 == ("USD") && moeda2 == ("ETH")) {conversaoFinal2 = (quantidade * 0.000617)}

        if (moeda1 == ("EUR") && moeda2 == ("BRL")) {conversaoFinal2 = (quantidade *5.18)}
        if (moeda1 == ("EUR") && moeda2 == ("USD")) {conversaoFinal2 = (quantidade *1)}
        if (moeda1 == ("EUR") && moeda2 == ("EUR")) {conversaoFinal2 = (quantidade *1)}
        if (moeda1 == ("EUR") && moeda2 == ("GBP")) {conversaoFinal2 = (quantidade *0.87)}
        if (moeda1 == ("EUR") && moeda2 == ("ARS")) {conversaoFinal2 = (quantidade *142.24)}
        if (moeda1 == ("EUR") && moeda2 == ("CNY")) {conversaoFinal2 = (quantidade * 6.91)}
        if (moeda1 == ("EUR") && moeda2 == ("JPY")) {conversaoFinal2 = (quantidade * 114.15)}
        if (moeda1 == ("EUR") && moeda2 == ("BTC")) {conversaoFinal2 = (quantidade * 0.000049)}
        if (moeda1 == ("EUR") && moeda2 == ("ETH")) {conversaoFinal2 = (quantidade * 0.000625)}

        if (moeda1 == ("GBP") && moeda2 == ("BRL")) {conversaoFinal2 = (quantidade *5.97)}
        if (moeda1 == ("GBP") && moeda2 == ("USD")) {conversaoFinal2 = (quantidade *1.15)}
        if (moeda1 == ("GBP") && moeda2 == ("EUR")) {conversaoFinal2 = (quantidade *1.15)}
        if (moeda1 == ("GBP") && moeda2 == ("GBP")) {conversaoFinal2 = (quantidade *1)}
        if (moeda1 == ("GBP") && moeda2 == ("ARS")) {conversaoFinal2 = (quantidade *164.06)}
        if (moeda1 == ("GBP") && moeda2 == ("CNY")) {conversaoFinal2 = (quantidade * 7.97)}
        if (moeda1 == ("GBP") && moeda2 == ("JPY")) {conversaoFinal2 = (quantidade * 166.16)}
        if (moeda1 == ("GBP") && moeda2 == ("BTC")) {conversaoFinal2 = (quantidade * 0.000056)}
        if (moeda1 == ("GBP") && moeda2 == ("ETH")) {conversaoFinal2 = (quantidade * 0.000722)}

        if (moeda1 == ("ARS") && moeda2 == ("BRL")) {conversaoFinal2 = (quantidade *0.04)}
        if (moeda1 == ("ARS") && moeda2 == ("USD")) {conversaoFinal2 = (quantidade *0.01)}
        if (moeda1 == ("ARS") && moeda2 == ("EUR")) {conversaoFinal2 = (quantidade *0.01)}
        if (moeda1 == ("ARS") && moeda2 == ("GBP")) {conversaoFinal2 = (quantidade *0.01)}
        if (moeda1 == ("ARS") && moeda2 == ("ARS")) {conversaoFinal2 = (quantidade *1)}
        if (moeda1 == ("ARS") && moeda2 == ("CNY")) {conversaoFinal2 = (quantidade * 0.05)}
        if (moeda1 == ("ARS") && moeda2 == ("JPY")) {conversaoFinal2 = (quantidade * 1.01)}
        if (moeda1 == ("ARS") && moeda2 == ("BTC")) {conversaoFinal2 = (quantidade * 0.00000033815319)}
        if (moeda1 == ("ARS") && moeda2 == ("ETH")) {conversaoFinal2 = (quantidade * 0.000004)}

        if (moeda1 == ("CNY") && moeda2 == ("BRL")) {conversaoFinal2 = (quantidade *0.75)}
        if (moeda1 == ("CNY") && moeda2 == ("USD")) {conversaoFinal2 = (quantidade *0.14)}
        if (moeda1 == ("CNY") && moeda2 == ("EUR")) {conversaoFinal2 = (quantidade *0.14)}
        if (moeda1 == ("CNY") && moeda2 == ("GBP")) {conversaoFinal2 = (quantidade *0.13)}
        if (moeda1 == ("CNY") && moeda2 == ("ARS")) {conversaoFinal2 = (quantidade *20.59)}
        if (moeda1 == ("CNY") && moeda2 == ("CNY")) {conversaoFinal2 = (quantidade * 1)}
        if (moeda1 == ("CNY") && moeda2 == ("JPY")) {conversaoFinal2 = (quantidade * 20.87)}
        if (moeda1 == ("CNY") && moeda2 == ("BTC")) {conversaoFinal2 = (quantidade * 0.000007)}
        if (moeda1 == ("CNY") && moeda2 == ("ETH")) {conversaoFinal2 = (quantidade * 0.000089)}

        if (moeda1 == ("JPY") && moeda2 == ("BRL")) {conversaoFinal2 = (quantidade *0.04)}
        if (moeda1 == ("JPY") && moeda2 == ("USD")) {conversaoFinal2 = (quantidade *0.01)}
        if (moeda1 == ("JPY") && moeda2 == ("EUR")) {conversaoFinal2 = (quantidade *0.01)}
        if (moeda1 == ("JPY") && moeda2 == ("GBP")) {conversaoFinal2 = (quantidade *0.01)}
        if (moeda1 == ("JPY") && moeda2 == ("ARS")) {conversaoFinal2 = (quantidade *0.99)}
        if (moeda1 == ("JPY") && moeda2 == ("CNY")) {conversaoFinal2 = (quantidade * 0.05)}
        if (moeda1 == ("JPY") && moeda2 == ("JPY")) {conversaoFinal2 = (quantidade * 1)}
        if (moeda1 == ("JPY") && moeda2 == ("BTC")) {conversaoFinal2 = (quantidade * 0.00000033739961)}
        if (moeda1 == ("JPY") && moeda2 == ("ETH")) {conversaoFinal2 = (quantidade * 0.000004)}

        if (moeda1 == ("BTC") && moeda2 == ("BRL")) {conversaoFinal2 = (quantidade *105873.43)}
        if (moeda1 == ("BTC") && moeda2 == ("USD")) {conversaoFinal2 = (quantidade *20791.57)}
        if (moeda1 == ("BTC") && moeda2 == ("EUR")) {conversaoFinal2 = (quantidade *20520.87)}
        if (moeda1 == ("BTC") && moeda2 == ("GBP")) {conversaoFinal2 = (quantidade *17782.22)}
        if (moeda1 == ("BTC") && moeda2 == ("ARS")) {conversaoFinal2 = (quantidade * 2897485.87)}
        if (moeda1 == ("BTC") && moeda2 == ("CNY")) {conversaoFinal2 = (quantidade * 141065.12)}
        if (moeda1 == ("BTC") && moeda2 == ("JPY")) {conversaoFinal2 = (quantidade * 2963844.58)}
        if (moeda1 == ("BTC") && moeda2 == ("BTC")) {conversaoFinal2 = (quantidade * 1)}
        if (moeda1 == ("BTC") && moeda2 == ("ETH")) {conversaoFinal2 = (quantidade * 13.82)}

        if (moeda1 == ("ETH") && moeda2 == ("BRL")) {conversaoFinal2 = (quantidade *8251.06)}
        if (moeda1 == ("ETH") && moeda2 == ("USD")) {conversaoFinal2 = (quantidade *1620.35)}
        if (moeda1 == ("ETH") && moeda2 == ("EUR")) {conversaoFinal2 = (quantidade *1599.26)}
        if (moeda1 == ("ETH") && moeda2 == ("GBP")) {conversaoFinal2 = (quantidade *1385.83)}
        if (moeda1 == ("ETH") && moeda2 == ("ARS")) {conversaoFinal2 = (quantidade *230467.22)}
        if (moeda1 == ("ETH") && moeda2 == ("CNY")) {conversaoFinal2 = (quantidade * 11220.38)}
        if (moeda1 == ("ETH") && moeda2 == ("JPY")) {conversaoFinal2 = (quantidade * 230981.96)}
        if (moeda1 == ("ETH") && moeda2 == ("BTC")) {conversaoFinal2 = (quantidade * 0.072364)}
        if (moeda1 == ("ETH") && moeda2 == ("ETH")) {conversaoFinal2 = (quantidade * 1)};


    // testes no console
    console.log(valorEmNumerico);
    console.log(moeda1);
    console.log(moeda2);

    // imprimir o resultado da conversao na tela
    var conversaoFinal = document.getElementById("valorConvertido");
    var valorConvertido = "A sua conversão é de "+ conversaoFinal2+" "+ moeda2;
    conversaoFinal.innerHTML = valorConvertido

};

