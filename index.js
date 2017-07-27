"use strict";

var csv = require('fast-csv');
var dates =require("./dates");


console.log("IOOF Coding Challenge\n");

var i = 0;

csv.fromPath("./resources/dates.csv")
  .on("data", (data) => {

    var d1 = new  dates.MyDate(data[0]);
    var d2  = new  dates.MyDate(data[1]);

    console.log("Test Case " + i++);
    console.log(["Date 1: ", d1.toString(), "\nDate 2:", d2.toString()].join(" "));

    console.log("Result");

    let diff = dates.DateUtil.getDifferenceInDays(d1,d2);
    if(d1.isEarlierThan(d2)) {
      console.log([d1, d2, diff].join(","));
    }
    else {
      console.log([d2, d1, diff].join(","));
    }

    console.log("\n");
  })
  .on("end", () => {
    console.log("Run complete.\n\nHave a lovely day :)");
  })
  ;
