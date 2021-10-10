// setInterval(callback, time, остальные аргументы)
// real time = 4ms...infinity

console.log(`my 1 interval`);
console.log(`my 1 interval`);
console.log(`my 1 interval`);
console.log(`my 1 interval`);

const IntID1 = setInterval(() => {
  console.log(IntID1);
}, 3000);

const IntID2 = setInterval(() => {
  console.log(IntID2);
}, 3000);

clearInterval(IntID1);
clearInterval(IntID2);
