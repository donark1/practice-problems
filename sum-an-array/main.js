var number = 0;

function sumArray (numbersArray) {
  for (var i = 0; i < numbersArray.length; i++) {
    number += numbersArray[i];
  }
  return number;
}
