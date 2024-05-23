function checkTriangle() {
  var side1 = parseFloat(document.getElementById("side1").value);
  var side2 = parseFloat(document.getElementById("side2").value);
  var side3 = parseFloat(document.getElementById("side3").value);

  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    if (side1 === side2 && side2 === side3) {
      document.getElementById("result1").innerText =
        "Це рівносторонній трикутник.";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      document.getElementById("result1").innerText =
        "Це рівнобедрений трикутник.";
    } else if (
      side1 ** 2 == side2 ** 2 + side3 ** 2 ||
      side2 ** 2 == side1 ** 2 + side3 ** 2 ||
      side3 ** 2 == side1 ** 2 + side2 ** 2
    ) {
      document.getElementById("result1").innerText =
        "Це прямокутник трикутник.";
    } else {
      document.getElementById("result1").innerText =
        "Це різносторонній трикутник.";
    }
  } else {
    document.getElementById("result1").innerText = "Це не трикутник";
  }
}
