function accountNumberProtector(cardNumberString) {
  var creditCardNumber = "**";
  var lastFourDigits = cardNumberString.slice(cardNumberString.length - 4);
  return "**" + lastFourDigits;
  }
