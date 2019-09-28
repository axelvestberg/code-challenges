valleyChallenge = (n, s) => {
  alt = 0;
  numOfValleys = 0;
  inValley = false;
  a = s.split("");

  a.map(unit => {
    if (alt < 0) { inValley = true; }
    switch(unit) {
      case "U":
        if(alt == -1 && inValley) {
          numOfValleys++;
        }
        alt++;
        break;
      case "D":
        alt--;
        break;
    }
  });
  return numOfValleys;
}

console.log(valleyChallenge(16, "UDDUDUDUDUDUDUDU"));