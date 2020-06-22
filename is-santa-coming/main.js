function isSantaComing(dateObject) {
 var christmasEve = new Date(2001, 11, 24);
 var year = christmasEve.getFullYear();
 var month = christmasEve.getMonth();
 var date = christmasEve.getDate();
  if ((dateObject.getFullYear() === year) && (dateObject.getMonth() === month) && (dateObject.getDate() === date)) {
 return true;
 } else {
 return false;
 }
}
