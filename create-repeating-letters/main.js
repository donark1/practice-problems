function createRepeatingLetters(word, numOfRepeats) {
  var x = "";
  for (var i = 0; i < word.length; i++) {
    for (var h = 0; h < numOfRepeats; h++)
      x += word[i];
  }
  return x;
}
