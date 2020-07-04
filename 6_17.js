var a = [...Array(5)].map(() => 0);
console.log(a);
a = null;
console.log("a = " + a);