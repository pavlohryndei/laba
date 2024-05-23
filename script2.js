function findSecondSmallest() {
  let input = document.getElementById("numbers").value;
  let numbers = input.split(",").map(function (item) {
    return parseInt(item, 10);
  });

  numbers.sort(function (a, b) {
    return a - b;
  });

  let secondSmallest = null;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[0]) {
      secondSmallest = numbers[i];
      break;
    }
  }

  if (secondSmallest !== null) {
    document.getElementById("result2").innerText =
      "Друге найменше число це: " + secondSmallest;
  } else {
    document.getElementById("result2").innerText =
      "Немає другого найменшого числа";
  }
}
