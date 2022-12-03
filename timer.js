let startButton = document.querySelector('#Start')
let stopButton = document.querySelector('#End')
let cleanButton = document.querySelector('#Clean')
let divTime = document.querySelector('#Time')

startButton.addEventListener('click', start)
stopButton.addEventListener('click', pause)
cleanButton.addEventListener('click', clear)

let miliSec = 0
let sec = 0
let min = 0
let hours = 0

let determinadoTime

function twoNumbers(TwoNum) {
    if (TwoNum < 10) {
        return '0' + TwoNum
    } 
    else {
        return TwoNum
    }
}

function timer(){
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

    divTime.innerHTML = `${twoNumbers(hours)}:${twoNumbers(min)}:${twoNumbers(sec)}<span class="miliseconds">.${miliSec}</span>`
}

function start() {
    clearInterval(determinadoTime)
    miliSec = 0
    sec = 0
    min = 0
    hours = 0
    determinadoTime = setInterval(timer, 10)
}

function clear() {
    clearInterval(determinadoTime)
    miliSec = 0
    sec = 0
    min = 0
    hours = 0
    divTime.innerHTML = '00:00:00<span class="miliseconds">.00</span>'
}

function pause() {
    clearInterval(determinadoTime)
}
