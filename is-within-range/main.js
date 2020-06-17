function isWithinRange(number, rangeObject) {
  min = rangeObject.min;
  max = rangeObject.max;
  if (number >= min && number <= max) {
    return true;
  } else {
    return false;
  }
}
