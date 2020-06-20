function wordBuilder(wordToSpell) {
 var word = [];
  for (var i = 1; i <= wordToSpell.length; i++) {
    word.push(wordToSpell.substring(0, i));
 }
return word;
}
