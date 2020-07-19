function isStringInOrder(string) {
  var stringArray = string.split("");
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i - 1] > stringArray[i])
        return false;
  }
  return true;
}
