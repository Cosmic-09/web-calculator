const display = document.getElementById("display");
const calculator = document.getElementById("buttons");
const operators = document.getElementsByClassName("op");

let result = "";

calculator.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON") return;

  const value = e.target.innerText;

  // Operator clicked → disable operators
  if (["+", "-", "*", "/"].includes(value)) {
    for (let op of operators) {
      op.disabled = true;
    }
  }

  // Clear
  if (value === "C") {
    result = "";
    display.innerText = "";
    for (let op of operators) {
      op.disabled = false;
    }
    return;
  }

  // Calculate
  if (value === "=") {
    try {
      result = eval(result).toString();
      display.innerText = result;
    } catch {
      display.innerText = "Error";
      result = "";
    }
    for (let op of operators) {
      op.disabled = false;
    }
    return;
  }

  // Number clicked → enable operators
  if (!["+", "-", "*", "/", "="].includes(value)) {
    for (let op of operators) {
      op.disabled = false;
    }
  }

  result += value;
  display.innerText = result;
});