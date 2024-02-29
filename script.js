
let screen = document.getElementById("screen")

function insertNumber(number) {
    screen.value += number
    focusScreen()
}

function insertOperator(operator) {
    screen.value += " " + operator + " "
    focusScreen()
}

function canc() {
    screen.value = "";
    focusScreen()
}

function back() {
    screen.value = screen.value.slice(0, -1)
    focusScreen()
}

function signToggle() {
    if (screen.value.startsWith("-")) {
        screen.value = screen.value.slice(1)
    } else {
        screen.value = "-" + screen.value
    }
    focusScreen()
}

function radice() {
    screen.value = Math.sqrt(parseFloat(screen.value).toString())
    focusScreen()
}

function quadrato() {
    let num = parseFloat(screen.value)
    screen.value = (num * num).toString()
    focusScreen()
}

function calculateResult() {
    let expression = screen.value
    let result= eval(expression)
    screen.value = result
    cronologia(expression +" = "+ result)
    focusScreen()
}

function focusScreen() {
    if (document.activeElement !== screen) {
        screen.focus()
    }
}

function inibireTasti(event) {
    let tastiPermessi = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/",".","(",")","=","Enter","Backspace"]
    let key = event.key
    if (tastiPermessi.includes(key)) {
        if (key === "Enter" || key === "=") {
            calculateResult()
        }
    } else {
        event.preventDefault()
    }
}

function cronologia(operazione) {
    let listaCronologia = document.getElementById("cList")
    let nuovoElemento = document.createElement("li")
    nuovoElemento.textContent = operazione
    listaCronologia.appendChild(nuovoElemento)
}

function resetList() {
    let list = document.getElementById("cList")
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

document.addEventListener("DOMContentLoaded", function(){
    focusScreen()
    
    document.addEventListener("keydown", inibireTasti)
})

