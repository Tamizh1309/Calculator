const inputValue = document.getElementById("user-input");
let expression = "";

document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const val = e.target.innerHTML.trim();
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
      expression = "";
    }
    inputValue.innerText += val;
    expression += val;
  });
});

document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const op = e.target.innerHTML.trim();

    if (op === "AC") {
      expression = "";
      inputValue.innerText = "0";
    } else if (op === "DEL") {
      expression = expression.slice(0, -1);
      inputValue.innerText = expression || "0";
    } else if (op === "=") {
      try {
        const result = eval(expression);
        inputValue.innerText = result;
        expression = result.toString();
      } catch {
        inputValue.innerText = "NaN";
        expression = "";
      }
    } else {
      expression += op;
      inputValue.innerText += op;
    }
  });
});