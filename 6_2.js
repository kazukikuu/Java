var a = [...Array(5)].map(() => 0.0);

for (var i = 0; i < a.length; i++) {
  a[i] = 5 - i;
  console.log("a[i] = " + a[i]);
}