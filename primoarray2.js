
var numerosPrimos = [];


// repetição para informar o tamanho da amostra
for(var i = 1; i < 15; i++) {
    var divisores = 0;
// repetição fazendo com que uma variavel de suporte 
    for (var x = 1; x < 15; x++) {
        if ( i % x === 0) {
            divisores = divisores + 1;
        }
    }
    if (divisores === 2) {
        numerosPrimos.push(i)
    }
}
var somarPrimo = 0;
for (var h = 0; h < numerosPrimos.length; h++){
    if (numerosPrimos[h] >= 4){   //limitei o array, para os numeros maiores ou igual a 4
    somarPrimo = somarPrimo + numerosPrimos[h];
}
}
console.log(somarPrimo);
