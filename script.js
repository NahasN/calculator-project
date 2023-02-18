'use strict';

const screen = document.getElementById('screen');

function btnClick(value) {
    screen.value += value;
}


function clearScreen() {
    screen.value = "";
}

function findResult() {
    const result = eval(screen.value)
    screen.value = result;
}

function dot() {
    let point = ".";
    screen.value += point;
}
function back() {
    let del = screen.value;
    screen.value = del.slice(0, -1);
}