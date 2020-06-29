function spellChecker(userWords, correctWords) {
  var correct = [];
  var incorrect = [];
  userWords = userWords.toString().split(',').map(String);
  correctWords = correctWords.toString().split(',').map(String);

  for (var i in userWords) {
    if (correctWords.indexOf(userWords[i]) === -1) incorrect.push(userWords[i]);
  }
  for (var i in correctWords) {
    if (userWords.indexOf(correctWords[i]) >= 0) correct.push(correctWords[i]);
  }

  return '{correct: ' + '["' + correct.join('", "') + '"],' + ' incorrect: ' + '["' + incorrect.join('", "') + '"]}'
}
