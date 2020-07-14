function applyDiscounts(pricesArray, discount) {
  var discountConvert = discount.replace("%", "")/100;
  return [(pricesArray[0] - (pricesArray[0] * discountConvert)), (pricesArray[1] - (pricesArray[1] * discountConvert)), (pricesArray[2] -  (pricesArray[2] * discountConvert))]
  }
