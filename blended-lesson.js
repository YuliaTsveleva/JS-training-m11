// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

//   CRUD :
// create - post
// read - get
// update - patch, put
// delete - delete

// асинхронные функции
// async function getAlbums() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/albums"); //fetch возсращает промис
//   return res.json();
// }

// const getAlbums = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/albums");
//   const resUsers = await fetch("https://jsonplaceholder.typicode.com/users");
//   const resTodos = await fetch("https://jsonplaceholder.typicode.com/todos");

//   return [res.json(), resUsers.json(), resTodos.json()];
// };

// getAlbums().then((data) => console.log(data));

// const test = async () => {
//   await setTimeout(() => {
//     //await не работает с таймерами, его испльзуем с асинхронными запросами, промисами
//     console.log("from timeout");
//   }, 1000);
//   console.log("111");
// };

// test();

// замыкание
// function makeCounter() {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     console.log(counter);
//   };
// }

// const counter1 = makeCounter();
// counter1();
// counter1();
// counter1();

// const counter2 = makeCounter();
// counter2();
// counter2();

// const b = 10;
// function func1() {}
// function func2() {}

// task 1
// найти уникальные элементы в массиве

const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

const third = [8, 13, 222, 93, 43, 11];
const fourth = [8, 222, 12, 93, 77, 83, 12, 43];

const getUnique = (firstArr, secondArr) => {
  // пиши код тут
  const thirdArray = [...firstArr, ...secondArr];
  const newArray = thirdArray.filter((number, index) => {
    return index === thirdArray.indexOf(number);
  });
  return newArray.reduce((acc, el) => {
    return !firstArr.includes(el) || !secondArr.includes(el)
      ? [...acc, el]
      : acc;
  }, []);
};

console.log(getUnique(first, second));

// console.log(getUnique(first, second)); // [1, 2, 4];

// task 2
// Джейден Смит, сын Уилла Смита, является звездой таких фильмов,
// как The Karate Kid (2010) и After Earth (2013). Джейден также
// известен своей философией, которую он распространяет через Twitter.
// Когда он пишет в Твиттере, он известен тем, что почти всегда использует
// каждое слово с большой буквы. Для простоты вам придется писать каждое слово
// с заглавной буквы, посмотрите, как ожидается сокращение в приведенном ниже примере.
// Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом.
// Строки - это настоящие цитаты Джейдена Смита, но они не пишутся с заглавной
// буквы так, как он их изначально набирал.

String.prototype.toJadenCase = function () {
  // пиши код тут
  return this.split(" ")
    .map((el) => el.replace(el[0], el[0].toUpperCase()))
    .join(" ");
};

const sentence = "How can mirrors be real if our eyes aren't real";

// function toJadenCase(string) {
//   return string
//     .split(" ")
//     .map((el) => el.replace(el[0], el[0].toUpperCase()))
//     .join(" ");
// }

// console.log(toJadenCase(sentence));
// console.log(sentence.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"

// console.log("hello world)".toJadenCase());

// task 3
// Некоторые числа обладают забавными свойствами. Например:

// 89 -> 8¹ + 9² = 89 * 1

// 695 -> 6² + 9³ + 5⁴ = 1390 = 695 * 2

// 46288 -> 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Дано положительное целое число n, записанное как abcd ... (a, b, c, d ... цифры)
// и положительное целое число p

// мы хотим найти положительное целое число k, если оно существует,
// например, сумма цифр n, взятых в последовательные степени p, равна k * n.
// Другими словами:
// Существует ли целое число k, например: (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^
// (p + 3) + ...) = n * k
//
// Если это так, мы вернем k, если не вернем -1.
// Примечание: n и p всегда будут указываться как строго положительные целые числа.

// function digPow(n, p) {
//   // пиши код тут
// }

// console.log(digPow(89, 1)); // 1
// console.log(digPow(92, 1)); // -1
// console.log(digPow(46288, 3)); // 51

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved");
  }, 3500);

  setTimeout(() => {
    reject("Rejected");
  }, 2500);
});

myPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));

console.log(555);
