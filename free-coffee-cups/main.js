function freeCoffeeCups(coffeeCups) {
  var freeCups = coffeeCups/6;
  if (coffeeCups >= 6) {
   coffeeCups += freeCups;
   return Math.floor(coffeeCups);
    }
  return coffeeCups;
}
