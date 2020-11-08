function backspace(calc) {
    size = calc.display.value.length;
    calc.display.value = calc.display.value.substring(0, size-1);
}
function p(calc) {
  var i, flag = true
  for(i = 2; i <= calc.display.value - 1; i++)
      if (calc.display.value % i == 0) {
          flag = false;
          break;
      }
  if (flag == true)
      calc.display.value = (calc.display.value + " is prime");
  else
      calc.display.value = (calc.display.value + " is not prime");
}
function calculate(calc) {
    if(calc.display.value.includes("!")) {
        size = calc.display.value.length;
        n = Number(calc.display.value.substring(0, size-1));
        f = 1;
        for(i = 2; i <= n; i++)
            f = f*i;
        calc.display.value = f;
    }
    else
        calc.display.value = eval(calc.display.value);
}