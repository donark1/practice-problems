
function digitFilter(numbersArray, numberFilter) {
  var array = [];
  for (var i = 0; i < numbersArray.length; i++) {
    var numberLength = numbersArray[i].toString();
    if (numberLength.length === numberFilter) {
      array.push(numbersArray[i]);
    }
  }
  return array;
}
