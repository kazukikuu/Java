console.log("  float     int");
console.log("---------------");


var x = 0.0;

for (var i = 0; i <= 1000; i++, x += 0.001) {
  console.log(`${x}        ${i / 1000}`);
}