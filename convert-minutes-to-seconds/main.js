function convertMinutesToSeconds(timeToConvert) {
  var timeParts = timeToConvert.split(":"),
      minutes = +timeParts[0];
      seconds = +timeParts[1];
      return (minutes * 60 + seconds);
  }
