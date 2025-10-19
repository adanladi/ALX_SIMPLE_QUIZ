let addB = document.getElementById("add");
let subtractB = document.getElementById("subtract");
let multiplyB = document.getElementById("multiply");
let divideB = document.getElementById("divide");

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

addB.addEventListener("click", () => {
  let input1 = document.getElementById("number1").value;
  let input2 = document.getElementById("number2").value;
  const number1 = parseFloat(input1) || 0;
  const number2 = parseFloat(input2) || 0;
  const result = add(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

subtractB.addEventListener("click", () => {
  let input1 = document.getElementById("number1").value;
  let input2 = document.getElementById("number2").value;
  const number1 = parseFloat(input1) || 0;
  const number2 = parseFloat(input2) || 0;
  const result = subtract(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

multiplyB.addEventListener("click", () => {
  let input1 = document.getElementById("number1").value;
  let input2 = document.getElementById("number2").value;
  const number1 = parseFloat(input1) || 0;
  const number2 = parseFloat(input2) || 0;
  const result = multiply(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

divideB.addEventListener("click", () => {
  let input1 = document.getElementById("number1").value;
  let input2 = document.getElementById("number2").value;
  const number1 = parseFloat(input1) || 0;
  const number2 = parseFloat(input2) || 0;
  const result = divide(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
