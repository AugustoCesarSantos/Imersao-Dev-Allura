function Converter () {
    //tratamento dos valores do input, quanto a pessoa quer converter
    var valorElemento = document.getElementById("valor");
    var valorDigitado = valorElemento.value;
    var valorEmNumerico = parseFloat(valorDigitado);

    //escolha da primeira da MEDIDA que a pessoa quer que seja convertida
    var primeiraMedida = document.getElementById("medida1");
    var med1 = primeiraMedida.value;
    
    //escolha da segunda MEDIDA para o qual a pessoa quer que seja convertida
    var segundaMedida = document.getElementById("medida2");
    var med2 = segundaMedida.value;

    let medidaBase = med1;
    let medidaConvert = med1;
    let quantidade= valorEmNumerico;

    var conversaoFinal2 = ((quantidade * medidaBase)*medidaConvert);
        if (med1 == ("km") && med2 == ("km")) {conversaoFinal2 = (quantidade *1)}
        if (med1 == ("km") && med2 == ("m")) {conversaoFinal2 = (quantidade *1000)}
        if (med1 == ("km") && med2 == ("cm")) {conversaoFinal2 = (quantidade *100000)}
        if (med1 == ("km") && med2 == ("mm")) {conversaoFinal2 = (quantidade *1000000)}
        if (med1 == ("km") && med2 == ("mi")) {conversaoFinal2 = (quantidade *0.62)}
        if (med1 == ("km") && med2 == ("yd")) {conversaoFinal2 = (quantidade * 1093.61)}
        if (med1 == ("km") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 3280.84)}
        if (med1 == ("km") && med2 == ("in")) {conversaoFinal2 = (quantidade * 39370.08)}
        if (med1 == ("km") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 0.54)}
        if (med1 == ("km") && med2 == ("br")) {conversaoFinal2 = (quantidade * 546.81)}
        if (med1 == ("km") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 0.000000000000106)}


        if (med1 == ("m") && med2 == ("km")) {conversaoFinal2 = (quantidade *0.001)}
        if (med1 == ("m") && med2 == ("m")) {conversaoFinal2 = (quantidade *1)}
        if (med1 == ("m") && med2 == ("cm")) {conversaoFinal2 = (quantidade *100)}
        if (med1 == ("m") && med2 == ("mm")) {conversaoFinal2 = (quantidade *1000)}
        if (med1 == ("m") && med2 == ("mi")) {conversaoFinal2 = (quantidade *0.000621)}
        if (med1 == ("m") && med2 == ("yd")) {conversaoFinal2 = (quantidade * 1.09)}
        if (med1 == ("m") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 3.28)}
        if (med1 == ("m") && med2 == ("in")) {conversaoFinal2 = (quantidade * 39.37)}
        if (med1 == ("m") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 0.00054)}
        if (med1 == ("m") && med2 == ("br")) {conversaoFinal2 = (quantidade * 0.55)}
        if (med1 == ("m") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 0.0000000000000106)}

        if (med1 == ("cm") && med2 == ("km")) {conversaoFinal2 = (quantidade *0.00001)}
        if (med1 == ("cm") && med2 == ("m")) {conversaoFinal2 = (quantidade *0.01)}
        if (med1 == ("cm") && med2 == ("cm")) {conversaoFinal2 = (quantidade *1)}
        if (med1 == ("cm") && med2 == ("mm")) {conversaoFinal2 = (quantidade *10)}
        if (med1 == ("cm") && med2 == ("mi")) {conversaoFinal2 = (quantidade *0.00000621)}
        if (med1 == ("cm") && med2 == ("yd")) {conversaoFinal2 = (quantidade *0.01)}
        if (med1 == ("cm") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 0.03)}
        if (med1 == ("cm") && med2 == ("in")) {conversaoFinal2 = (quantidade * 0.039)}
        if (med1 == ("cm") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 0.0000054)}
        if (med1 == ("cm") && med2 == ("br")) {conversaoFinal2 = (quantidade * 0.01)}
        if (med1 == ("cm") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 1.06E-19)}
    
        if (med1 == ("mm") && med2 == ("km")) {conversaoFinal2 = (quantidade *0.000001)}
        if (med1 == ("mm") && med2 == ("m")) {conversaoFinal2 = (quantidade *0.001)}
        if (med1 == ("mm") && med2 == ("cm")) {conversaoFinal2 = (quantidade *0.1)}
        if (med1 == ("mm") && med2 == ("mm")) {conversaoFinal2 = (quantidade *1)}
        if (med1 == ("mm") && med2 == ("mi")) {conversaoFinal2 = (quantidade *0.000000621)}
        if (med1 == ("mm") && med2 == ("yd")) {conversaoFinal2 = (quantidade * 0.00109)}
        if (med1 == ("mm") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 0.00328)}
        if (med1 == ("mm") && med2 == ("in")) {conversaoFinal2 = (quantidade *0.04)}
        if (med1 == ("mm") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 0.00000054)}
        if (med1 == ("mm") && med2 == ("br")) {conversaoFinal2 = (quantidade * 0.000547)}
        if (med1 == ("mm") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 1.06E-19)}

        if (med1 == ("mi") && med2 == ("km")) {conversaoFinal2 = (quantidade *1.61)}
        if (med1 == ("mi") && med2 == ("m")) {conversaoFinal2 = (quantidade *1609.34)}
        if (med1 == ("mi") && med2 == ("cm")) {conversaoFinal2 = (quantidade *160934.4)}
        if (med1 == ("mi") && med2 == ("mm")) {conversaoFinal2 = (quantidade *1609344)}
        if (med1 == ("mi") && med2 == ("mi")) {conversaoFinal2 = (quantidade *1)}
        if (med1 == ("mi") && med2 == ("yd")) {conversaoFinal2 = (quantidade * 1760)}
        if (med1 == ("mi") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 5280)}
        if (med1 == ("mi") && med2 == ("in")) {conversaoFinal2 = (quantidade *63360)}
        if (med1 == ("mi") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 0.87)}
        if (med1 == ("mi") && med2 == ("br")) {conversaoFinal2 = (quantidade * 880)}
        if (med1 == ("mi") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 0.00000000000017)}

        if (med1 == ("yd") && med2 == ("km")) {conversaoFinal2 = (quantidade *0.000914)}
        if (med1 == ("yd") && med2 == ("m")) {conversaoFinal2 = (quantidade *0.91)}
        if (med1 == ("yd") && med2 == ("cm")) {conversaoFinal2 = (quantidade *91.44)}
        if (med1 == ("yd") && med2 == ("mm")) {conversaoFinal2 = (quantidade *914.40)}
        if (med1 == ("yd") && med2 == ("mi")) {conversaoFinal2 = (quantidade *0.000568)}
        if (med1 == ("yd") && med2 == ("yd")) {conversaoFinal2 = (quantidade * 1)}
        if (med1 == ("yd") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 3)}
        if (med1 == ("yd") && med2 == ("in")) {conversaoFinal2 = (quantidade *36)}
        if (med1 == ("yd") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 0.000494)}
        if (med1 == ("yd") && med2 == ("br")) {conversaoFinal2 = (quantidade * 0.50)}
        if (med1 == ("yd") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 0.0000000000000000967)}

        if (med1 == ("ft") && med2 == ("km")) {conversaoFinal2 = (quantidade *0.000305)}
        if (med1 == ("ft") && med2 == ("m")) {conversaoFinal2 = (quantidade *0.30)}
        if (med1 == ("ft") && med2 == ("cm")) {conversaoFinal2 = (quantidade *30.48)}
        if (med1 == ("ft") && med2 == ("mm")) {conversaoFinal2 = (quantidade *304.80)}
        if (med1 == ("ft") && med2 == ("mi")) {conversaoFinal2 = (quantidade *0.000189)}
        if (med1 == ("ft") && med2 == ("yd")) {conversaoFinal2 = (quantidade * 0.33)}
        if (med1 == ("ft") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 1)}
        if (med1 == ("ft") && med2 == ("in")) {conversaoFinal2 = (quantidade *12)}
        if (med1 == ("ft") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 0.000165)}
        if (med1 == ("ft") && med2 == ("br")) {conversaoFinal2 = (quantidade * 0.17)}
        if (med1 == ("ft") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 0.0000000000000000322)}

        if (med1 == ("in") && med2 == ("km")) {conversaoFinal2 = (quantidade * 0.0000254)}
        if (med1 == ("in") && med2 == ("m")) {conversaoFinal2 = (quantidade *0.03)}
        if (med1 == ("in") && med2 == ("cm")) {conversaoFinal2 = (quantidade *2.54)}
        if (med1 == ("in") && med2 == ("mm")) {conversaoFinal2 = (quantidade *25.40)}
        if (med1 == ("in") && med2 == ("mi")) {conversaoFinal2 = (quantidade *0.0000158)}
        if (med1 == ("in") && med2 == ("yd")) {conversaoFinal2 = (quantidade * 0.03)}
        if (med1 == ("in") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 0.08)}
        if (med1 == ("in") && med2 == ("in")) {conversaoFinal2 = (quantidade *1)}
        if (med1 == ("in") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 0.0000137)}
        if (med1 == ("in") && med2 == ("br")) {conversaoFinal2 = (quantidade * 0.01)}
        if (med1 == ("in") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 2.68E-18)}

        if (med1 == ("miN") && med2 == ("km")) {conversaoFinal2 = (quantidade *1.85)}
        if (med1 == ("miN") && med2 == ("m")) {conversaoFinal2 = (quantidade *1852)}
        if (med1 == ("miN") && med2 == ("cm")) {conversaoFinal2 = (quantidade *185200)}
        if (med1 == ("miN") && med2 == ("mm")) {conversaoFinal2 = (quantidade *1852000)}
        if (med1 == ("miN") && med2 == ("mi")) {conversaoFinal2 = (quantidade *1.15)}
        if (med1 == ("miN") && med2 == ("yd")) {conversaoFinal2 = (quantidade * 2025.37)}
        if (med1 == ("miN") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 6076.12)}
        if (med1 == ("miN") && med2 == ("in")) {conversaoFinal2 = (quantidade *72913.39)}
        if (med1 == ("miN") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 1)}
        if (med1 == ("miN") && med2 == ("br")) {conversaoFinal2 = (quantidade * 1012.69)}
        if (med1 == ("miN") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 0.000000000000196)}

        if (med1 == ("br") && med2 == ("km")) {conversaoFinal2 = (quantidade *0.00183)}
        if (med1 == ("br") && med2 == ("m")) {conversaoFinal2 = (quantidade *1.83)}
        if (med1 == ("br") && med2 == ("cm")) {conversaoFinal2 = (quantidade *182.88)}
        if (med1 == ("br") && med2 == ("mm")) {conversaoFinal2 = (quantidade *1828.8)}
        if (med1 == ("br") && med2 == ("mi")) {conversaoFinal2 = (quantidade *0.00114)}
        if (med1 == ("br") && med2 == ("yd")) {conversaoFinal2 = (quantidade * 2)}
        if (med1 == ("br") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 6)}
        if (med1 == ("br") && med2 == ("in")) {conversaoFinal2 = (quantidade *72)}
        if (med1 == ("br") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 0.000987)}
        if (med1 == ("br") && med2 == ("br")) {conversaoFinal2 = (quantidade * 1)}
        if (med1 == ("br") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 0.000000000000000193)}

        if (med1 == ("luz") && med2 == ("km")) {conversaoFinal2 = (quantidade *9460000000000)}
        if (med1 == ("luz") && med2 == ("m")) {conversaoFinal2 = (quantidade *9460000000000000)}
        if (med1 == ("luz") && med2 == ("cm")) {conversaoFinal2 = (quantidade * 946000000000000000)}
        if (med1 == ("luz") && med2 == ("mm")) {conversaoFinal2 = (quantidade * 9460000000000000000)}
        if (med1 == ("luz") && med2 == ("mi")) {conversaoFinal2 = (quantidade *5880000000000)}
        if (med1 == ("luz") && med2 == ("yd")) {conversaoFinal2 = (quantidade * 10300000000000000)}
        if (med1 == ("luz") && med2 == ("ft")) {conversaoFinal2 = (quantidade * 3100000000000000)}
        if (med1 == ("luz") && med2 == ("in")) {conversaoFinal2 = (quantidade *372000000000000000)}
        if (med1 == ("luz") && med2 == ("miN")) {conversaoFinal2 = (quantidade * 5110000000000)}
        if (med1 == ("luz") && med2 == ("br")) {conversaoFinal2 = (quantidade * 5170000000000000)}
        if (med1 == ("luz") && med2 == ("luz")) {conversaoFinal2 = (quantidade * 1)};

    // testes no console
    console.log(valorEmNumerico);
    console.log(med1);
    console.log(med2);

    // imprimir o resultado da conversao na tela
    var conversaoFinal = document.getElementById("valorConvertido");
    var valorConvertido = "A sua conversão é de "+ conversaoFinal2+" "+ med2;
    conversaoFinal.innerHTML = valorConvertido

};

