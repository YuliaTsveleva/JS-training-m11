console.dir(Promise); //констуктор

let condition = 1;

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    condition ? resolve(condition) : reject(condition);
  }, 2000);
});

// console.log(newPromise);

// setTimeout(() => {
//   console.log(newPromise);
// }, 5500);

// экземпляр промиса имеет 2 состояния
// pending - до исполнения
// settled - исполнился:
// - fulfilled - если все хорошо, вызван метод resolve
// - rejected - если все не хорошо, вызван метод reject

// если обрабытывать промис только через then
// newPromise.then(
//   (success) => {
//     console.log("then", success);
//   },
//   (error) => {
//     console.log("then", error);
//   }
// );

// но лучше в then обрабатывать успех, а в catch ошибки
// newPromise
//   .then((success) => {
//     console.log("then", success);
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   })
//   .finally(() => {
//     console.log("finally", `ты молодец в люом случае`);
//   });

// finally - когда нам нужно что-то исполнить в любом случае независимо от успеха или ошибки
// передавать параметры в него не надо!

// когда нужно обработать в несколько этапов успешный промис
// newPromise
//   .then((firstThen) => {
//     console.log("firstThen", firstThen);
//     return firstThen + 1;
//   })
//   .then((secondThen) => {
//     console.log("secondThen", secondThen);
//     return secondThen + 2;
//   })
//   .then((thirdThen) => console.log("thirdThen", thirdThen))
//   .catch((error) => console.log("catch", error))
//   .finally(() => {
//     console.log("finally", `ты молодец в любом случае`);
//   });

// обработка нескольких разных промисов сразу
const prom1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 0);
});

const prom2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2);
  }, 500);
});

const prom3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3);
  }, 1000);
});

// Promise.all([prom1, prom2, prom3])
//   .then((ok) => {
//     console.log("ok", ok);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// Promise.race([prom1, prom2, prom3])
//   .then((ok) => {
//     console.log("ok", ok);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// Promise.resolve(1); //success

// // new Promise((res) => {
// //   res(1);
// // });

// Promise.rereject(0); //error
// // new Promise((rej) => {
// //   rej(0);
// // });

// Promise.finally();

// не хорошо
function main(ok, neok) {
  condition ? ok() : neok();
}

// хорошо

function mainProm() {
  return condition ? Promise.resolve(`ok`) : Promise.reject(`ne ok`);
}

const result = mainProm();
console.log(mainProm());

result
  .then((ok) => {
    console.log(ok);
  })
  .catch((error) => {
    console.log(error);
  });


  