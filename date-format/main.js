function dateFormatter(date) {
 var dateString = date.split("/").reverse();
 if (dateString[0] >= 21 && dateString[0] <= 99) {
   var newDateString = dateString.join("");
   return "19" + newDateString;
 } else if (dateString[0] >= 00 && dateString[0] <= 20) {
   var newDateString = dateString.join("");
   return "20" + newDateString;
 }
}
