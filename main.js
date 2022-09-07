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
const theme1 = document.querySelector('#theme1')
const theme2 = document.querySelector('#theme2')
const theme3 = document.querySelector('#theme3')
const slider = document.querySelector('.switcher')
const change = document.getElementsByClassName('change')

const buttons = [zero, one, two, three, four, five, six, seven, eight, nine, dot, divide, times, minus, plus]

for (let key of buttons)
    key.addEventListener('click', displayNum)

equal.addEventListener('click', operation)
reset.addEventListener('click', res)
del.addEventListener('click', delet)
theme1.addEventListener('click', themeSwitch1)
theme2.addEventListener('click', themeSwitch2)
theme3.addEventListener('click', themeSwitch3)

function preferredTheme() {
    
}

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
    // location.reload()
}

function delet() {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1)
}

function themeSwitch1() {
    for (let key of change)
        key.style.color = 'white'
    slider.style.justifyContent = 'flex-start'
    document.documentElement.style.setProperty('--mainBg', 'hsl(222, 26%, 31%)')
    document.documentElement.style.setProperty('--toggleKeypadBg', 'hsl(223, 31%, 20%)')
    document.documentElement.style.setProperty('--screenBg', 'hsl(224, 36%, 15%)')
    document.documentElement.style.setProperty('--keyBg', 'hsl(225, 21%, 49%)')
    document.documentElement.style.setProperty('--keyShadow', 'hsl(224, 28%, 35%)')
    document.documentElement.style.setProperty('--redKeyToggleBg', 'hsl(6, 63%, 50%)')
    document.documentElement.style.setProperty('--darkRedKeyShadow', 'hsl(6, 70%, 34%)')
    document.documentElement.style.setProperty('--grayKeyBg', 'hsl(30, 25%, 89%)')
    document.documentElement.style.setProperty('--grayOrangeShadow', 'hsl(28, 16%, 65%)')
    document.documentElement.style.setProperty('--textGrayBlue', 'hsl(221, 14%, 31%)')
}

function themeSwitch2(e) {
    for (let key of change)
        key.style.color = 'hsl(60, 10%, 19%)'
    slider.style.justifyContent = 'center'
    document.documentElement.style.setProperty('--mainBg', 'hsl(0, 0%, 90%)')
    document.documentElement.style.setProperty('--toggleKeypadBg', 'hsl(0, 5%, 81%)')
    document.documentElement.style.setProperty('--screenBg', 'hsl(0, 0%, 93%)')
    document.documentElement.style.setProperty('--keyBg', 'hsl(185, 42%, 37%)')
    document.documentElement.style.setProperty('--keyShadow', 'hsl(185, 58%, 25%)')
    document.documentElement.style.setProperty('--redKeyToggleBg', 'hsl(25, 98%, 40%)')
    document.documentElement.style.setProperty('--darkRedKeyShadow', 'hsl(25, 99%, 27%)')
    document.documentElement.style.setProperty('--grayKeyBg', 'hsl(45, 7%, 89%)')
    document.documentElement.style.setProperty('--grayOrangeShadow', 'hsl(35, 11%, 61%)')
    document.documentElement.style.setProperty('--textGrayBlue', 'hsl(60, 10%, 19%)')
}

function themeSwitch3() {
    for (let key of change)
        key.style.color = 'hsl(52, 100%, 62%)'
    slider.style.justifyContent = 'flex-end'
    equal.style.color = 'hsl(198, 20%, 13%)'
    document.documentElement.style.setProperty('--mainBg', 'hsl(268, 75%, 9%)')
    document.documentElement.style.setProperty('--toggleKeypadBg', '(268, 71%, 12%)')
    document.documentElement.style.setProperty('--screenBg', 'hsl(268, 47%, 21%)')
    document.documentElement.style.setProperty('--keyBg', 'hsl(281, 89%, 26%)')
    document.documentElement.style.setProperty('--keyShadow', 'hsl(285, 91%, 52%)')
    document.documentElement.style.setProperty('--redKeyToggleBg', 'hsl(176, 100%, 44%)')
    document.documentElement.style.setProperty('--darkRedKeyShadow', 'hsl(177, 92%, 70%)')
    document.documentElement.style.setProperty('--grayKeyBg', 'hsl(268, 47%, 21%)')
    document.documentElement.style.setProperty('--grayOrangeShadow', 'hsl(290, 70%, 36%)')
    document.documentElement.style.setProperty('--textGrayBlue', 'hsl(52, 100%, 62%)')
}
