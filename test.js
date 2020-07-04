// var x = 1;
// var y = x;

// x = 2;

// console.log(y);

// var data1 = [0, 1, 2];
// var x = 0;
// var data2 = data1
// data1[0] = 5;

// console.log(x);

// const data = [1, 2, 3];
// // data = [4, 5, 6]; 配列そのもの代入してるので×
// data[1] = 10;

// console.log(data);


// 分割代入
// let data = [1, 2, 3];
// let [x0, x1, x2] = data

// console.log(x0);


// otherを使うパターン
// let data = [56, 40, 26, 82, 19, 17, 73, 99]
// let [x0, x1, x2, ...other] = data

// console.log(other);
// var average = function (arr, fn) {
//   return sum(arr, fn) / arr.length;
// };
// var arr = [1, 2, 3, 4, 5];
// console.log(average(arr));


// for (var i = 1; i <= n; i++) {
//   var s = "";
//   for (var j = 1; j <= (2 * n - 1); j++) { ////For every each counter     there exist 2*n-1 value
//     (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " "; //Check   the work book image
//   }
//   console.log(s);
// }

for (var i = 0; i <= 100; i++) {
  console.log(Math.floor(Math.random() * (13 - 0)) + 0);
}
