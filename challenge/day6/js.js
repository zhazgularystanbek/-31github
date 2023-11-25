let a = "Zhazgul Arstanbek";

let b = a.split(" ");

let c = b.map((el) => {
  return el[0] + ".";
});
let d = c.join("");
console.log(d);
