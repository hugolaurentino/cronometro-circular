let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000;
let cron;
let limiteClick = 0;

const zeraContador = document.querySelector('.contador')
const btnVerde = document.querySelector('.btn-verde')
const btnAmarelo = document.querySelector('.btn-amarelo')
const btnVermelho = document.querySelector('.btn-vermelho')

const start = (() => {
    if (limiteClick === 0) {
        cron = setInterval(() => {
            timer();
        }, tempo);
    }
    limiteClick++
});

const pause = (() => {
    limiteClick = 0
    clearInterval(cron);
})

const stop = (() => {
    limiteClick = 0
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    zeraContador.textContent = '00:00:00'
})

const timer = (() => {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;

        if (mm == 60) {
            mm = 0;
            hh++;
        }
    }

    const formatar = (hh < 10 ? '0' + hh : hh) +
        ':' + (mm < 10 ? '0' + mm : mm) +
        ':' + (ss < 10 ? '0' + ss : ss);

    zeraContador.textContent = formatar

    return formatar;
})

btnVerde.addEventListener('click', start)
btnAmarelo.addEventListener('click', pause)
btnVermelho.addEventListener('click', stop)