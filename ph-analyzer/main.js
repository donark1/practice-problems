function phAnalyzer(pH) {
  if (pH < 5) {
  return "acidic";
  } else if (pH < 10) {
  return "neutral";
  } else if (pH <= 14) {
  return "alkaline";
  } else {
  return "invalid pH value";
  }
}
