// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.
// let a = 15;
// if (a === 10) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
// let a = -2;
// if (a > 0) {
//   console.log("positive");
// } else if (a === 0) {
//   console.log("равно");
// } else {
//   console.log("negative");
// }

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".

// let number = 45;
// if (number % 2 === 0) {
//   console.log("Четное число");
// } else {
//   console.log("Нечетное число");
// }

// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".
// let a = 10;
// let b = 2;
// if (a % b === 0) {
//   console.log("Четное число");
// } else {
//   console.log("Нечетное число");
// }

// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".
// let s = true;
// let s = 10;
// let s = "motion";
// if (typeof s === "boolean") {
//   console.log("boolean");
// } else if (typeof s === "number") {
//   console.log("number");
// } else if (typeof s === "string") {
//   console.log("string");
// } else {
//   console.log("error");
// }

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = 15;
// if (a > 1 && a < 9) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.
// let a = 3;
// if (a === 3 || a === 7) {
//   console.log(a + 7);
// } else {
//   console.log(a / 10);
// }

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// let a = -1;
// let b = 15;
// if (a <= 0 && b >= 5) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// let a = 12;
// let b = 20;
// if ((a > 4 && a < 10) || (b >= 7 && b < 17)) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let num = +prompt("Введите число: ");

// if (num === 1) {
//   console.log("zima");
// } else if (num === 2) {
//   console.log("vesna");
// } else if (num === 3) {
//   console.log("leto");
// } else if (num === 4) {
//   console.log("osen");
// } else {
//   console.log("Error");
// }

// let a = prompt("Введите число 1: ");
// console.log(Number(a));
// console.log(parseInt(a));
// console;
// console.log(String(a));
// console.log(toString(a));
// let c = prompt("Введите +, -, * или /");
// let b = +prompt("Введите число 2: ");
// if (c === "+") {
//   console.log(a + b);
// } else if (c === "-") {
//   console.log(a - b);
// } else if (c === "*") {
//   console.log(a * b);
// } else if (c === "/") {
//   console.log(a / b);
// } else {
//   console.log("Ошибка!");
// }

// let a = "motion academy";
// if (a.includes("school")) {
//   console.log(a.replace("school", "academy"));
// } else if (a.includes("academy")) {
//   console.log(a.replace("academy", "school"));
// } else {
//   console.log("Error");
// }

// let age = +prompt("Жашынызды жазыныз: ");
// if (age >= 0 && age < 2) {
//   console.log("ui");
// } else if (age >= 2 && age <= 5) {
//   console.log("sadik");
// } else if (age >= 6 && age <= 17) {
//   console.log("mektep");
// } else if (age >= 18 && age <= 25) {
//   console.log("univer");
// } else if (age >= 26 && age <= 59) {
//   console.log("jumush");
// } else if (age >= 60) {
//   console.log("pensiya");
// } else {
//   console.log("kata");
// }

// let age = prompt("age: ");
// if (age == 1 || age[1] == 1) {
//   console.log(`${age} год`);
// } else if ((age >= 2 && age < 5) || (age[1] >= 2 && age[1] < 5)) {
//   console.log(`${age} года`);
// } else if ((age >= 2 && age < 5) || (age[1] >= 2 && age[1] < 5)) {
//   console.log(`${age} года`);
// } else {
//   console.log(`${age} лет`);
// }
