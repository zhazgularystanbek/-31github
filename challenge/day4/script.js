// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let a = ["a", "b", "c"];
a.push(1, 2, 3);
console.log(a);

//2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
let b = [1, 2, 3];
let c = [4, 5, 6];
console.log(b.concat(c));

let d = b.concat(c);
console.log(d);

//3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let e = [1, 2, 3];
e.push(4, 5, 6);
console.log(e);

// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let f = [1, 2, 3];
f.unshift(4, 5, 6);
console.log(f);

//5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let j = ["js", "css", "jq"];
// method 1:
console.log(j[0]);
// method 2:
console.log(j.slice(0, 1));
// method 3:
console.log(j.shift());

//6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let k = ["js", "css", "jq"];
// method 1:
console.log(k.pop()); // jq
// method 2:
// console.log(k.slice(-1)); //['jq']
// method 3:
// console.log(k[k.length - 1]); //jq

//7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
let l = [1, 2, 3, 4, 5];
// let m = l.slice(0, 3);
// console.log(m);

// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let n = l.slice(3);
// console.log(n);

// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// l.splice(1, 2);
// console.log(l);

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// l.splice(0, 1);
// l.splice(3, 1);
// console.log(l); // [2, 3, 4]

// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// l.splice(3, 0, "a", "b", "c");
// console.log(l); //[1, 2, 3, 'a', 'b', 'c', 4, 5]

// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// l.splice(1, 0, "a", "b");
// l.splice(6, 0, "c");
// l.splice(8, 0, "e");
// l.push("e"); // 2 variant
// console.log(l);

// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let z = [3, 4, 1, 2, 7];
// console.log(z.sort());

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1метод:
// function getFirst(array) {
//   return array[0];
// }
// console.log(getFirst(array));

// 2 метод:
// function getFirst(array) {
//   return array.slice(0, 1);
// }
// console.log(getFirst(array)); //[1]

// 3 метод:
// function getFirst(array) {
//   return array.shift();
// }
// console.log(getFirst(array)); // 1

// 1 метод:
// function getLastElem(array) {
//   return array[array.length - 1];
// }
// console.log(getLastElem(array)); //9

// 2 метод:
// function getLastElem(array) {
//   return array.pop();
// }
// console.log(getLastElem(array)); //9

// 3 метод:
// function getLastElem(array) {
//   return array.slice(-1);
// }
// console.log(getLastElem(array)); //[9]
