function oddUpEvenDown(array) {
  var updatedArray = [];
  for (var i = 0; i < array.length; i++) {
   if (array[i] % 2 === 0) {
    updatedArray.push(array[i] - 1);
   } else {
    updatedArray.push(array[i] + 1);
   }
  } return updatedArray;
  }
