"use strict";

const leapYears = [1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008];
const monthsMap = [31, undefined,31,30, 31,30,31, 31, 30, 31,30,31 ];

class DateUtil {


static  getDaysinWholeMonth(month,year) {
    if (month ===2){
      if (leapYears.indexOf(year) < 0){
        return 28;
      }
      else {
        return 29;
      }
    }
    else {
      return monthsMap[month -1];
    }
  };

  static getDaysInWholeYear(year) {
    if (leapYears.indexOf(year) < 0 ){
      return 365;
    }
    else {
      return 366;
    }
  };

 static  getDifferenceInDays (d1, d2) {

   if (!d1.isEarlierThan(d2)){
     return this.getDifferenceInDays(d2,d1);
   }

    var totalDiff = 0;

    //Same month comparison
    if (d1.year === d2.year && d1.month === d2.month ){
      return d2.day - d1.day;
    }
    //Round out the first month
    else {
      totalDiff += this.getDaysinWholeMonth(d1.month, d1.year) - d1.day + 1;
    }

    var currentDate = new MyDate(1, d1.month, d1.year);
    currentDate.addMonth();


    //This algorithim isn't efficient, but whatevs.
    //Just increment through the months and add number of days to the total
    while (currentDate.isEarlierThan(d2)){
      //round out last month;
      if(currentDate.year === d2.year && currentDate.month === d2.month){
        totalDiff += d2.day - currentDate.day;
        return totalDiff;
      }
      else {
        totalDiff += this.getDaysinWholeMonth(currentDate.month,currentDate.year);
        currentDate.addMonth();

      }
    }

    return totalDiff;
  }

};


 class MyDate {
  constructor(day,month,year) {

    if (arguments.length === 1){

      var str = day;
      var parts = str.trim().split(" ");

      if (parts.length !== 3){
        throw err("format error");
      }

      this.day = Number(parts[0]);
      this.month= Number(parts[1]);
      this.year = Number(parts[2]);
    }

    else {
      this.day = Number(day);
      this.month =Number(month);
      this.year = Number(year);
    }

  }

  isEarlierThan(otherDate) {
    //nb. is using shortcut logic comparisson
    return (this.year < otherDate.year
      || (this.year === otherDate.year && this.month < otherDate.month)
      || (this.year === otherDate.year && this.month === otherDate.month && this.day < otherDate.day )
    );
  }

  toString() {
    return [this.day, this.month, this.year].join(" ");
  }

  addMonth() {
    this.month++;
    if (this.month > 12) {
      this.month = 1;
      this.year++;
    }
  }
}


module.exports = {
  MyDate: MyDate,
  DateUtil: DateUtil
}
