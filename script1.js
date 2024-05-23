function convert() {
  let inputValue = parseFloat(document.getElementById("inputValue").value);
  let inputUnit = document.getElementById("inputUnit").value;
  let outputUnit = document.getElementById("outputUnit").value;

  let result;

  switch (inputUnit) {
    case "byte":
      switch (outputUnit) {
        case "byte":
          result = inputValue;
          break;
        case "kilobyte":
          result = inputValue / 1024;
          break;
        case "megabyte":
          result = inputValue / (1024 * 1024);
          break;
        case "gigabyte":
          result = inputValue / (1024 * 1024 * 1024);
          break;
        case "terabyte":
          result = inputValue / (1024 * 1024 * 1024 * 1024);
          break;
      }
      break;
    case "kilobyte":
      switch (outputUnit) {
        case "byte":
          result = inputValue * 1024;
          break;
        case "kilobyte":
          result = inputValue;
          break;
        case "megabyte":
          result = inputValue / 1024;
          break;
        case "gigabyte":
          result = inputValue / (1024 * 1024);
          break;
        case "terabyte":
          result = inputValue / (1024 * 1024 * 1024);
          break;
      }
      break;
    case "megabyte":
      switch (outputUnit) {
        case "byte":
          result = inputValue * (1024 * 1024);
          break;
        case "kilobyte":
          result = inputValue * 1024;
          break;
        case "megabyte":
          result = inputValue;
          break;
        case "gigabyte":
          result = inputValue / 1024;
          break;
        case "terabyte":
          result = inputValue / (1024 * 1024);
          break;
      }
      break;
    case "gigabyte":
      switch (outputUnit) {
        case "byte":
          result = inputValue * (1024 * 1024 * 1024);
          break;
        case "kilobyte":
          result = inputValue * (1024 * 1024);
          break;
        case "megabyte":
          result = inputValue * 1024;
          break;
        case "gigabyte":
          result = inputValue;
          break;
        case "terabyte":
          result = inputValue / 1024;
          break;
      }
      break;
    case "terabyte":
      switch (outputUnit) {
        case "byte":
          result = inputValue * (1024 * 1024 * 1024 * 1024);
          break;
        case "kilobyte":
          result = inputValue * (1024 * 1024 * 1024);
          break;
        case "megabyte":
          result = inputValue * (1024 * 1024);
          break;
        case "gigabyte":
          result = inputValue * 1024;
          break;
        case "terabyte":
          result = inputValue;
          break;
      }
      break;
  }

  document.getElementById("result").innerText = result;
}
