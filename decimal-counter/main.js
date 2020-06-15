
function decimalPlaceCounter(stringNumber) {
  var str = "" + stringNumber;
  var index = str.indexOf('.');
  if (index >= 0) {
    return str.length - index - 1;
  } else {
    return 0;
  }
}
