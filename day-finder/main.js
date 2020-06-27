function dayFinder(stringDate) {
  var dayOfWeek = new Date(stringDate).getDay();
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek]
  return day;
}
