// class Date
console.log(Date);
console.dir(Date);

// create the date
const newDate = new Date();
console.log(newDate);

// ()=> object Date current

// ('mon dd, yyyy') => object Date this
const fixDate = new Date(`sep 11 2011`);
console.log(fixDate);

// (yyyy, mm, dd, hh, mm, ss, ms) => object Date this

const numDate = new Date(1990, 6, 11, 16, 30, 33);
console.log("numDate", numDate);

// Unix - ms from 1 January 1970 UTC
// (1000000000000000000)=> Date this
const dateFromMS = new Date(1633540762747);
console.log("dateFromMS", dateFromMS);

// Date.now() => Unix ms
const unixData = Date.now();
console.log("unixData", unixData);

// getters
console.log("getFullYear()", dateFromMS.getFullYear());
console.log("getDay()", dateFromMS.getDay());
console.log("getMonth()", dateFromMS.getMonth());
console.log("getDate()", dateFromMS.getDate());
console.log("getHours()", dateFromMS.getHours());
console.log("getMinutes()", dateFromMS.getMinutes());
console.log("getSeconds()", dateFromMS.getSeconds());
