// all operators and numbers
const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const dot = document.querySelector('#dot')
const divide = document.querySelector('#divide')
const times = document.querySelector('#times')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const del = document.querySelector('#del')
const reset = document.querySelector('#reset')
const equal = document.querySelector('#equal')
let display = document.querySelector('.display')

const buttons = [zero, one, two, three, four, five, six, seven, eight, nine, dot, divide, times, minus, plus]

for (let key of buttons)
    key.addEventListener('click', displayNum)

equal.addEventListener('click', operation)
reset.addEventListener('click', res)
del.addEventListener('click', delet)

function displayNum(e) {
    let num = e.target.textContent
    display.textContent += num
}

// Operations
function operation() {
    let question = display.textContent
    if (question) {
        let answer = eval(question)
        display.textContent = answer
    }
}

function res() {
    display.textContent = null
}

function delet() {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1)
}