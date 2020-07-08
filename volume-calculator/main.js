function volumeCalculator(boxesArray) {
  var volume1 = boxesArray[0][0] * boxesArray[0][1] * boxesArray[0][2];
  var volume2 = boxesArray[1][0] * boxesArray[1][1] * boxesArray[1][2];
  var volume3 = boxesArray[2][0] * boxesArray[2][1] * boxesArray[2][2];
  var totalVolume = volume1 + volume2 + volume3;
  return totalVolume;
}
