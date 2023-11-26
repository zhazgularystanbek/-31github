let john = { name: "John" };
let ben = { name: "Ben" };
let visitsCountObj = {};

visitsCountObj[ben] = 234;
visitsCountObj[john] = 123;

alert(visitsCountObj["[object Object]"]);
