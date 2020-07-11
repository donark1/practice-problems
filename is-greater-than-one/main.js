function isGreaterThanOne(fraction) {
  fractionSplit = fraction.split("/");
  var decimal = fractionSplit[0] / fractionSplit[1];
  if (decimal > 1) {
    return true;
  } else {
    return false;
  }
}
