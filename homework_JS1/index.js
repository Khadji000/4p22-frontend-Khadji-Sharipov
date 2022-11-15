"use strict";

const first = document.getElementById("firstNumber");
const symbol = document.getElementById("symbolForm");
const second = document.getElementById("secondNumber");
const button = document.getElementById("button");

button.addEventListener("click", (event) => {
    event.preventDefault();
    if (first.value == "") {
        console.log("Первое число не указаано");
    } else if (second.value == "") {
        console.log("Второе число не указаано");
    } else if (symbol.value == "") {
        console.log("Не введён знак");
    } else {
          let result;
          const first = Number(document.getElementById("firstNumber").value);
          const second = Number(document.getElementById("secondNumber").value);
          switch (symbol.value) {
            case '+':
              result = first + second;
              break;
            case '-':
              result = first - second;
              break;
            case '*':
              result = first * second;
              break;
            case '/':
              result = first / second;
              break;
              default: console.log("Программа не поддерживает такую операцию");
          };
          switch(result){
            case NaN: console.log("Операциянекорректна"); break;
            default: console.log(result);
          }
        };
});