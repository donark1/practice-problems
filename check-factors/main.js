function checkFactors(array, number) {
  var number1 = number/array[0];
  var number2 = number/array[1];
  var number3 = number/array[2];
  if ((number1 % 1 == 0) && (number2 % 1 == 0) && (number3 % 1 == 0)) {
    return true;
  } else {
    return false;
  }
}
