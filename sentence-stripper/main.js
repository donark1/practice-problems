function sentenceStripper(sentence, charsToStrip) {
  var charsToStripBreakDownArray = charsToStrip.split("");
  var sentenceBreakDownArray = sentence.split("");
  var sentenceBreakDownArray = sentenceBreakDownArray.filter((item) => !charsToStripBreakDownArray.includes(item));
  var newSentenceString = sentenceBreakDownArray.toString().replace(/,/g, "");
  return newSentenceString;
}
