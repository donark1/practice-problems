function isTheAverageWhole(numbersArray) {
  var sum = numbersArray.reduce((previous, current) => current += previous);
  var avg = sum / numbersArray.length;
  if (avg === Math.floor(avg)) {
    return true;
  } else {
    return false;
  }
}
