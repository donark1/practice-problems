function pocketChangeCalculator(changeArray, itemCost) {
  var quartersTotal = changeArray[0] * 0.25;
  var dimesTotal = changeArray[1] * 0.10;
  var nickelsTotal = changeArray[2] * 0.05;
  var penniesTotal = changeArray[3] * 0.01;
  var total = quartersTotal + dimesTotal + nickelsTotal + penniesTotal;
    if (total <= itemCost) {
    return false;
  } else {
    return true;
  }
}
