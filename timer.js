// Seleção dos botões "Start", "Pause" e "Clean" do HTML.

let startButton = document.querySelector('#Start')
let stopButton = document.querySelector('#Pause')
let cleanButton = document.querySelector('#Clean')
let divTime = document.querySelector('#Time')

// Escutadores de eventos, cada botao vai executar uma determinada função.
startButton.addEventListener('click', start)
stopButton.addEventListener('click', pause)
cleanButton.addEventListener('click', clear)

// Variáveis, espaços de memória para as 4 unidades mais usadas em cronômetros para mensurar tempo. 
let miliSec = 0
let sec = 0
let min = 0
let hours = 0

// Variável que vai armazenar o intervalo de tempo 'setInterval(timer, 10)'. Com a finalidade de manipulação desse elemento nas funções.
let determinadoTime

function twoNumbers(TwoNum) {
    // Função que vai fazer todas as maneiras de medir tempo serem representadas com 2 casas.
    if (TwoNum < 10) {
        return '0' + TwoNum
    } 
    else {
        return TwoNum
    }
}

function timer(){
    // Função do cálculo do tempo percorrido.
    // Intervalo de 1 milisegundo => +miliseg * 1000  = 1 segundo, intervalos de 10 milisegundos => +miliseg * 100 = 1 segundo. 
    // Cada 10 milisegundos => Adicionar 1 unidade para milisegundos.
    miliSec++
    if (miliSec == 100) {
        sec++
        miliSec = 0
    }
    if (sec == 60) {
        min++
        sec = 0 
    }
    
    if (min == 60) {
        hours++
        min = 0
    }

    divTime.innerHTML = `${twoNumbers(hours)}:${twoNumbers(min)}:${twoNumbers(sec)}<span class="miliseconds">.${twoNumbers(miliSec)}</span>`
}

function start() {
    // Função que vai dar inicio a contagem
    clearInterval(determinadoTime)
    // Intervalo de tempo (10 milisegundos) => Executar => Função 'timer'
    determinadoTime = setInterval(timer, 10)
}

function clear() {
    // Função que vai limpar a contagem
    // Reset
    clearInterval(determinadoTime)
    miliSec = 0
    sec = 0
    min = 0
    hours = 0
    // Voltar ao padrão (00:00:00.00)
    divTime.innerHTML = '00:00:00<span class="miliseconds">.00</span>'
}

function pause() {
    // função que vai pausar a contagem 
    // Parar a execução da função 'timer' por intervalos de tempo.
    clearInterval(determinadoTime)
}
