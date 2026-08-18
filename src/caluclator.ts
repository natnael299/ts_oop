//variables
const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const operation = document.getElementById("operation") as HTMLSelectElement;
const calculate = document.getElementById("calculate");
const resultDisplay = document.getElementById(
  "resultDisplay",
) as HTMLBodyElement;

//calculation functionality
const calculateResult = () => {
  let result;
  const num1_data = Number(num1.value);
  const num2_data = Number(num2.value);
  const operation_data = operation.value;
  switch (operation_data) {
    case "":
      result = "Select an operation";
      break;
    case "+":
      result = num1_data + num2_data;
      break;
    case "-":
      result = num1_data - num2_data;
      break;
    case "/":
      if (num2_data == 0 && num1_data !== 0) {
        result = "Can't divide by 0";
      } else {
        result = num1_data / num2_data;
      }
      break;
    case "*":
      result = num1_data * num2_data;
      break;
  }

  resultDisplay.textContent = "The result &rightarrow;" + result;
};
