// setTimeout(callback, time, остальные аргументы ...)
// real time = 0 ... 4ms || 15ms

function ShowMessage(msg) {
  console.log(msg);
}

setTimeout(ShowMessage);
