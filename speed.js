const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function speedDetector(speed) {
  //declare variables for speed limit and km per point
  const speedLimit = 70;
  const kmPerPoint = 5;
  // check if the speed is less than or equal to the speed limit
  if (speed <= speedLimit) {
    return "Ok";
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint); //calculate points
    if (points >= 12) {
      return "License suspended"; //if points is greater than or equal to 12 print license suspended
    } else {
      return points; //else print points
    }
  }
}

readline.question("What was the speed? ", (speed) => {
  console.log(speedDetector(speed));
  readline.close();
});
