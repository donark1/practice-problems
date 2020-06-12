function getWordCount(sentence) {
  var totalWords = 0;
  for (var i = 0; i <= sentence.length; i++)
    if (sentence.charAt(i) == " ") {
      totalWords++;
    }
    return totalWords + 1;
  }
