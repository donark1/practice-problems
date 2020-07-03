function fogClearer(stringToClear) {
  if (stringToClear.includes("f", "o", "g")) {
    return stringToClear.replace(/f|o|g/g, "");
  } else {
    return "It's a clear sky!";
  }
}
