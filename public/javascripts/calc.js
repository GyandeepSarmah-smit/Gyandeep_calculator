function backspace(calc) {
    size = calc.display.value.length;
    calc.display.value = calc.display.value.substring(0, size-1);
}

function calculate(calc) {
    
    calc.display.value = eval(calc.display.value);
}