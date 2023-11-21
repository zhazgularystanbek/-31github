const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];
const count = {};
fruits.forEach((f) => {
  if (!count[f]) {
    count[f] = 1;
  } else {
    count[f]++;
  }
});

console.log(count);

// Вставить тире между словами строки

let str = "HTML JavaScript PHP";

function insert_dash(str) {
  return str.replaceAll(" ", "-");
}

console.log(insert_dash(str));
