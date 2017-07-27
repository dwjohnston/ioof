var dates = require("./dates");

//*** Using libraries to get check that my code works.


function libCompareDates(d1, d2) {
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(d1.year,d1.month,d1.day);
  var secondDate = new Date(d2.year,d2.month,d2.day);

  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

  return diffDays;
}


//cbf doing more with this - but run with nodemon and play with various dates to check edge cases 

var d1 = new dates.MyDate(01, 01, 2000);
var d2 = new dates.MyDate(01, 01, 2001);

console.log("--");
console.log(dates.DateUtil.getDifferenceInDays(d1, d2));
console.log(libCompareDates(d1,d2));

//Seems like it's working
