function dateFormatter(date) {
 var dateString = date.split("/").reverse();
 var newDateString = dateString.join("");
 return "19" + newDateString;
}
