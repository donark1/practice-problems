function caseReverser(stringOfWords) {
  var reversedCaseString = "";
  for (var i = 0; i < stringOfWords.length; i++) {
    reversedCaseString += stringOfWords[i] === stringOfWords[i].toUpperCase() ? stringOfWords[i].toLowerCase() : stringOfWords[i].toUpperCase()
  }
  return reversedCaseString
}
