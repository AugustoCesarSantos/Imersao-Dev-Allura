function Converter () {
    //tratamento dos valores do input, quanto a pessoa quer converter
    var valorElemento = document.getElementById("valor");
    var valorDigitado = valorElemento.value;
    var valorEmNumerico = parseFloat(valorDigitado);

    //escolha da primeira da moeda que a pessoa quer que seja convertida
    var primeiraVelo = document.getElementById("velocidade1");
    var velo1 = primeiraVelo.value;
    
    //escolha da segunda moeda para o qual a pessoa quer que seja convertida
    var segundaVelo = document.getElementById("velocidade2");
    var velo2 = segundaVelo.value;

    let velocidadeBase = velo1;
    let velocidadeConvert = velo1;
    let quantidade= valorEmNumerico;

    var conversaoFinal2 = ((quantidade * velocidadeBase)*velocidadeConvert);
        if (velo1 == ("KMS") && velo2 == ("KMS")) {conversaoFinal2 = (quantidade *1)}
        if (velo1 == ("KMS") && velo2 == ("MS")) {conversaoFinal2 = (quantidade *1000)}
        if (velo1 == ("KMS") && velo2 == ("KMH")) {conversaoFinal2 = (quantidade *3600)}
        if (velo1 == ("KMS") && velo2 == ("MIS")) {conversaoFinal2 = (quantidade *0.62)}
        if (velo1 == ("KMS") && velo2 == ("MPH")) {conversaoFinal2 = (quantidade *2236.94)}
        if (velo1 == ("KMS") && velo2 == ("NO")) {conversaoFinal2 = (quantidade * 1943.84)}
        if (velo1 == ("KMS") && velo2 == ("LUZ")) {conversaoFinal2 = (quantidade * 0.00000334)}
        if (velo1 == ("KMS") && velo2 == ("SOM")) {conversaoFinal2 = (quantidade * 2.92)}

        if (velo1 == ("MS") && velo2 == ("KMS")) {conversaoFinal2 = (quantidade *0.001)}
        if (velo1 == ("MS") && velo2 == ("MS")) {conversaoFinal2 = (quantidade *1)}
        if (velo1 == ("MS") && velo2 == ("KMH")) {conversaoFinal2 = (quantidade *3.6)}
        if (velo1 == ("MS") && velo2 == ("MIS")) {conversaoFinal2 = (quantidade *0.000621)}
        if (velo1 == ("MS") && velo2 == ("MPH")) {conversaoFinal2 = (quantidade *2.24)}
        if (velo1 == ("MS") && velo2 == ("NO")) {conversaoFinal2 = (quantidade * 1.94)}
        if (velo1 == ("MS") && velo2 == ("LUZ")) {conversaoFinal2 = (quantidade * 0.000000000334)}
        if (velo1 == ("MS") && velo2 == ("SOM")) {conversaoFinal2 = (quantidade * 0.00292)}

        if (velo1 == ("KMH") && velo2 == ("KMS")) {conversaoFinal2 = (quantidade *0.000278)}
        if (velo1 == ("KMH") && velo2 == ("MS")) {conversaoFinal2 = (quantidade *0.28)}
        if (velo1 == ("KMH") && velo2 == ("KMH")) {conversaoFinal2 = (quantidade *1)}
        if (velo1 == ("KMH") && velo2 == ("MIS")) {conversaoFinal2 = (quantidade *0.000173)}
        if (velo1 == ("KMH") && velo2 == ("MPH")) {conversaoFinal2 = (quantidade *0.62)}
        if (velo1 == ("KMH") && velo2 == ("NO")) {conversaoFinal2 = (quantidade *0.54)}
        if (velo1 == ("KMH") && velo2 == ("LUZ")) {conversaoFinal2 = (quantidade * 0.000000000927)}
        if (velo1 == ("KMH") && velo2 == ("SOM")) {conversaoFinal2 = (quantidade * 0.00081)}
    
        if (velo1 == ("MIS") && velo2 == ("KMS")) {conversaoFinal2 = (quantidade *1.61)}
        if (velo1 == ("MIS") && velo2 == ("MS")) {conversaoFinal2 = (quantidade *1609.34)}
        if (velo1 == ("MIS") && velo2 == ("KMH")) {conversaoFinal2 = (quantidade *5793.64)}
        if (velo1 == ("MIS") && velo2 == ("MIS")) {conversaoFinal2 = (quantidade *1)}
        if (velo1 == ("MIS") && velo2 == ("MPH")) {conversaoFinal2 = (quantidade *3600)}
        if (velo1 == ("MIS") && velo2 == ("NO")) {conversaoFinal2 = (quantidade * 3128.31)}
        if (velo1 == ("MIS") && velo2 == ("LUZ")) {conversaoFinal2 = (quantidade * 0.00000537)}
        if (velo1 == ("MIS") && velo2 == ("SOM")) {conversaoFinal2 = (quantidade *4.69)}

        if (velo1 == ("MPH") && velo2 == ("KMS")) {conversaoFinal2 = (quantidade *0.000447)}
        if (velo1 == ("MPH") && velo2 == ("MS")) {conversaoFinal2 = (quantidade *0.45)}
        if (velo1 == ("MPH") && velo2 == ("KMH")) {conversaoFinal2 = (quantidade *1.61)}
        if (velo1 == ("MPH") && velo2 == ("MIS")) {conversaoFinal2 = (quantidade *0.000278)}
        if (velo1 == ("MPH") && velo2 == ("MPH")) {conversaoFinal2 = (quantidade *1)}
        if (velo1 == ("MPH") && velo2 == ("NO")) {conversaoFinal2 = (quantidade * 0.87)}
        if (velo1 == ("MPH") && velo2 == ("LUZ")) {conversaoFinal2 = (quantidade * 0.00000000149)}
        if (velo1 == ("MPH") && velo2 == ("SOM")) {conversaoFinal2 = (quantidade *0.0013)}

        if (velo1 == ("NO") && velo2 == ("KMS")) {conversaoFinal2 = (quantidade *0.000514)}
        if (velo1 == ("NO") && velo2 == ("MS")) {conversaoFinal2 = (quantidade *0.51)}
        if (velo1 == ("NO") && velo2 == ("KMH")) {conversaoFinal2 = (quantidade *1.85)}
        if (velo1 == ("NO") && velo2 == ("MIS")) {conversaoFinal2 = (quantidade *0.00032)}
        if (velo1 == ("NO") && velo2 == ("MPH")) {conversaoFinal2 = (quantidade *1.15)}
        if (velo1 == ("NO") && velo2 == ("NO")) {conversaoFinal2 = (quantidade * 1)}
        if (velo1 == ("NO") && velo2 == ("LUZ")) {conversaoFinal2 = (quantidade * 0.00000000172)}
        if (velo1 == ("NO") && velo2 == ("SOM")) {conversaoFinal2 = (quantidade *0.00015)}

        if (velo1 == ("LUZ") && velo2 == ("KMS")) {conversaoFinal2 = (quantidade *299792.46)}
        if (velo1 == ("LUZ") && velo2 == ("MS")) {conversaoFinal2 = (quantidade *299792458)}
        if (velo1 == ("LUZ") && velo2 == ("KMH")) {conversaoFinal2 = (quantidade *1079252848.8)}
        if (velo1 == ("LUZ") && velo2 == ("MIS")) {conversaoFinal2 = (quantidade *186282.4)}
        if (velo1 == ("LUZ") && velo2 == ("MPH")) {conversaoFinal2 = (quantidade *670616629.38)}
        if (velo1 == ("LUZ") && velo2 == ("NO")) {conversaoFinal2 = (quantidade * 582749918.36)}
        if (velo1 == ("LUZ") && velo2 == ("LUZ")) {conversaoFinal2 = (quantidade * 1)}
        if (velo1 == ("LUZ") && velo2 == ("SOM")) {conversaoFinal2 = (quantidade *874030.49)}

        if (velo1 == ("SOM") && velo2 == ("KMS")) {conversaoFinal2 = (quantidade *0.34)}
        if (velo1 == ("SOM") && velo2 == ("MS")) {conversaoFinal2 = (quantidade *343)}
        if (velo1 == ("SOM") && velo2 == ("KMH")) {conversaoFinal2 = (quantidade *1234.8)}
        if (velo1 == ("SOM") && velo2 == ("MIS")) {conversaoFinal2 = (quantidade *0.21)}
        if (velo1 == ("SOM") && velo2 == ("MPH")) {conversaoFinal2 = (quantidade *767.27)}
        if (velo1 == ("SOM") && velo2 == ("NO")) {conversaoFinal2 = (quantidade * 666.74)}
        if (velo1 == ("SOM") && velo2 == ("LUZ")) {conversaoFinal2 = (quantidade * 0.00000114)}
        if (velo1 == ("SOM") && velo2 == ("SOM")) {conversaoFinal2 = (quantidade *1)};

    // testes no console
    console.log(valorEmNumerico);
    console.log(velo1);
    console.log(velo2);

    // imprimir o resultado da conversao na tela
    var conversaoFinal = document.getElementById("valorConvertido");
    var valorConvertido = "A sua conversão é de "+ conversaoFinal2+" "+ velo2;
    conversaoFinal.innerHTML = valorConvertido

};

