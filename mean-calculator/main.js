function meanCalculator(numbersArray) {
  var total = 0, i;
  for (i = 0; i < numbersArray.length; i += 1) {
    total += numbersArray[i];
  }
  return total / numbersArray.length;
}
