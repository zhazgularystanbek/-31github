// let a = "Kabaev Sultan";

// let b = a.split(" ");

// let c = b.map((el) => {
//   return el[0] + ".";
// });
// let d = c.join("");
// console.log(d);

// 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.
// summa kajdogo chisla: 3+1+4, 6+4, ...
let a = [315, 64, 75, 43, 65, 63];
let arr = a.map((el) => {
  let str = el.toString().split("");
  let num = str.map((el) => {
    return +el;
  });
  let sum = 0;
  let arrSum = num.map((el) => {
    return (sum += el);
  });
  return sum;
});
console.log(arr); //[9, 10, 12, 7, 11, 9];

//summa vseh elementov:
let sum = 0;
let newSum = a.map((el) => {
  return (sum += el);
});
console.log(sum); //625

// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
let userNames = ["Аскар", "Баяман", "Калмамат"];
const getUserName = function (str) {
  return str.map((el) => {
    if (el.includes("а")) {
      return el.replaceAll("а", "я");
    }
  });
};
console.log(getUserName(userNames));

// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.
// let userNames = ["Аскар", "Баяман", "Калмамат"];
// const getUserName = function (str) {
//   return str.filter((el) => {
//     if (el.includes("к") || el.includes("К")) {
//       return el;
//     }
//   });
// };
// console.log(getUserName(userNames));

// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.
// let numbers = [4, 54, 49];
// let sq = numbers.map((el) => {
//   return el ** 2;
// });
// console.log(sq);

// 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// let nums = [3134, 4, -143, -245, -214];
// let newNums = nums.filter((el) => {
//   return el < 0;
// });
// console.log(newNums);

// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let numbers = [3, 51, 30, 54, 60];
// let newNums = numbers.filter((el) => {
//   return el % 2 === 0;
// });
// console.log(newNums);

// 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let users = ["Бегимай", "Баяман", "Калмамат", "Аида"];
// let newUsers = users.filter((el) => {
//   return el.length > 5;
// });
// console.log(newUsers);

// 8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.
// let nums = [-13, 96, -41, -28, 40, -55];
// let newNums = nums.filter((el) => {
//   return el < 0;
// }).length;
// console.log(newNums);

// 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// let nums = [3, 51, -30, -54, 60];
// let newNums = nums
//   .filter((el) => {
//     return el > 0;
//   })
//   .filter((el) => {
//     return el > 30;
//   })
//   .map((el) => {
//     return Math.sqrt(el);
//   });
// console.log(newNums); //[7.14142842854285, 7.745966692414834]

// let newNums = nums
//   .filter((el) => {
//     return el > 0;
//   })
//   .map((el) => {
//     if (el > 30) {
//       return Math.sqrt(el);
//     }
//     return el;
//   });
// console.log(newNums); // [3, 7.14142842854285, 7.745966692414834]

// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию, которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).
// let arr = [NaN, 0, 77, false, -17, "", undefined, 99, null];
// const getNewArr = function (arr) {
//   return arr.filter(Boolean);
// };

// console.log(getNewArr(arr)); //[77, -17, 99]

// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.
// let users = ["Бегимай", "Баяман", "Калмамат"];
// let newUsers = users.map((el) => {
//   return el.length;
// });

// console.log(newUsers); //[7, 6, 8]

// Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат', 'Ben']. Выведите все вторые строки в верхнем регистре.
// let users = ["Аскар", "Баяман", "Калмамат", "Ben"];

// 1. vtoroi simvol kajdogo elementa
// let newUs = users.map((el) => {
//   return el[1].toUpperCase();
// });
// console.log(newUs); //['С', 'А', 'А', 'E']

//2. kajdyi vt. element v verhnem registre
// let newUsers = users
//   .filter((el, i) => {
//     return (i + 1) % 2 === 0;
//   })
//   .map((el) => {
//     return el.toUpperCase();
//   });

// console.log(newUsers); // ['БАЯМАН', 'BEN']

// Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]
// let arr = ["асКар", "бЯяман", "калМмамат"];
// let newArr = arr.map((el) => {
//   return el[0].toUpperCase() + el.slice(1).toLowerCase();
// });
// console.log(newArr); //['Аскар', 'Бяяман', 'Калммамат']

// Преобразование данных
// Создайте массив чисел и используйте метод map(), чтобы преобразовать числа в строковый формат с добавлением символа "$" в начале каждой строки.
// let prices = [10, 20, 30, 40, 50];
// let newPr = prices.map((el) => {
//   return "$" + el;
// });
// console.log(newPr); //['$10', '$20', '$30', '$40', '$50']

// Поиск элемента в массиве
// Создайте массив чисел и используйте метод find(), чтобы найти первый элемент, который больше  25 определенного порогового значения.
// let numbers = [10, 20, 30, 40, 50];
// let newNum = numbers.find((el) => {
//   return el > 25;
// });
// console.log(newNum); //30

// Поиск элемента с использованием функции-коллбэка
// Создайте массив строк и используйте метод find(), чтобы найти первую строку, которая начинается с "b" определенной буквы.
// let words = ["apple", "banana", "cherry", "date"];
// let newWord = words.find((el) => {
//   return el[0] === "b";
// });
// console.log(newWord);

// Поиск элемента по индексу
// Создайте массив чисел и используйте метод find() для нахождения элемента по его индексу 2
// let numbers = [10, 20, 30, 40, 50];
// let newNum = numbers.find((el, i) => {
//   return i === 2;
// });
// console.log(newNum); //30

// Преобразование массива в строку
// Создайте массив строк и используйте метод join(), чтобы объединить все элементы массива в одну строку с определенным разделителем.
// let fruits = ["apple", "banana", "cherry"];
// let arr = fruits.join("**");
// console.log(arr); //apple**banana**cherry

// Объединение пути к файлу
// Создайте массив строк, представляющих части пути к файлу, и используйте метод join() для объединения их в один путь.
// let pathParts = ["folder", "subfolder", "file.txt"];
// let arr = pathParts.join("/");
// console.log(arr); //folder/subfolder/file.txt

// Преобразование чисел в строку
// Создайте массив чисел и используйте метод join() для преобразования их в строку, разделенную запятой.
// let numbers = [1, 2, 3, 4, 5];
// let arr = numbers.join(",");
// console.log(arr); //1,2,3,4,5

// Разделение строки по пробелам
// Разделите строку на массив слов, используя пробел в качестве разделителя.
// let sentence = "Это пример разделения строки на слова";
// let arr = sentence.split(" ");
// console.log(arr); //['Это', 'пример', 'разделения', 'строки', 'на', 'слова']

// Разделение строки по запятой
// Разделите строку, содержащую перечень элементов, разделенных запятыми, на массив элементов.
// let items = "apple, banana, cherry, date";
// let arr = items.split(",");
// console.log(arr); //['apple', ' banana', ' cherry', ' date']
