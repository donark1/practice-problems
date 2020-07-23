function findMaximumSum(numberArray) {
  var numberArraySort = numberArray.sort(function (a, b) { return a - b });
  return numberArraySort[5] + numberArraySort[6] + numberArraySort[7] + numberArraySort[8] + numberArraySort[9];
}
