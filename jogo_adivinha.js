// gerar um numero randomico de 1 a 100
// o usuario tem 10 chances de acertar esse numero.
// a cada numero que o usuario coloca, temos que retornar se o numero gerado é maior ou menor do que ele chutou.
//se ele acertar = "mensagem parabéns e encerrar o jogo"
//se ele errar e ainda tiver tentativa = "tente novamente, o numero que vocês escolheu é menor/maior"
//se acaber as tentativas "encerrar o jogo - Você perdeu, quer jogar novamente?"
// começa o jogo

var readline = require("readline"); //isso é outra biblioteca do vscode para receber inputs do usuario
var fs = require("fs");

var rl = readline.createInterface({ // isso é a estrutura para receber o dados, por um JSON.
    input: process.stdin,  //ele não explica no video, mas é o comando que vai dar input nessa linha  e na de baixo vai dar o output do dado
    output: process.stdout
});

var numeroAleatorio = Math.round(Math.random() * 100)
if (numeroAleatorio === 0) {
    numeroAleatorio = 1;
}


var numeroTentativas = 10;
var count = 0;

console.log(numeroAleatorio)


//rl.question é o comando para falar com o usuario, tem que vir um function de callback

rl.question("Qual seu nome? ", function (nome) {
    pergunta();
});

function jogo2() {
    rl.question("Vamos jogar Novamente? Digite s/n: ", function (numero2) {
        if ((numero2 === "s" || numero2 === "S")) {
            pergunta();
        } else {
            rl.close();
        }

    })
}

function pergunta() {
    rl.question("Vamos jogar! Mande seu Chutometro: ", function (numero) {
        numero = parseInt(numero);
        numeroTentativas--;
        if (numero === numeroAleatorio) {
            console.log("Parabéns, seu chute foi certeiro você venceu com " + count + " tentativas");
            count++
            rl.close();
        } else if (numeroTentativas === 10) {
            console.log("Seus chutes se esgotaram, melhore a pontaria");
            jogo2();
            var novaTentativa = 2
            numeroTentativas = novaTentativa;
            count++;
        } else if (numero > numeroAleatorio) {
            console.log("Seu chute foi alto, esse numero é maior que o chute certo, você tem " + numeroTentativas + " tentativas");
            pergunta();
            count++;
        } else if (numero < numeroAleatorio) {
            console.log("Seu chute foi rasteiro, esse numero é menor que o chute certo, você tem " + numeroTentativas + " tentativas");
            pergunta();
            count++;
        } else {

        }

    })
}


