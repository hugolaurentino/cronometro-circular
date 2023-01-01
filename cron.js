"use strict"

let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000;
let cron;
let limiteClick = 0;

const zeraContador = document.querySelector('#counter')

//Inicia o temporizador
function start() {
    if (limiteClick === 0) {
        cron = setInterval(() => {
            timer();
        }, tempo);
    }
    limiteClick++
    console.log(limiteClick)
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    limiteClick = 0
    clearInterval(cron);
    console.log(limiteClick)
}

//Para o temporizador e limpa as variáveis
function stop() {
    limiteClick = 0
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    zeraContador.textContent = '00:00:00'
    // document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 60) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 60) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    const formatar = (hh < 10 ? '0' + hh : hh) +
        ':' + (mm < 10 ? '0' + mm : mm) +
        ':' + (ss < 10 ? '0' + ss : ss);

    zeraContador.textContent = formatar

    //Retorna o valor tratado
    return formatar;
}
