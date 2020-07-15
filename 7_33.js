function readUserInput(question) {
  var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    readline.question(question, (answer) => {
      resolve(answer);
      readline.close();
    });
  });
}

function printArray1(a) {
  for (var i = 0; i < a.length - 1; i++) {
    process.stdout.write(` ${a[i]} `);
  }
  process.stdout.write(` ${a[a.length - 1]} `);
  console.log();
}

function printArray2(a) {

  var width = new Array(a.length).fill(0);
  var max = 0;
  for (var i = 0; i < a.length; i++) {
    width[i] = new Array(a[i].length).fill(0);
    if (a[i].length > max) {
      max = a[i].length;
    }
  }



  var maxWidth = new Array(max).fill(0);

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
      var value = a[i][j];
      if (value < 0) {
        width[i][j] = 1;
      } else {
        width[i][j] = 0;
      }
      do {
        width[i][j]++;
        value /= 10;
      } while (value != 0);
      if (width[i][j] > maxWidth[j]) {
        maxWidth[j] = width[i][j];
      }
    }
  }


  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length - 1; j++) {
      process.stdout.write(` ${a[i][j]} `);
    }
    process.stdout.write(`${a[i][a[i].length - 1]}`);
    console.log();
  }
}



(async function main() {

  var c = await readUserInput('配列xの要素数: ');
  var num = Number(c);
  var x = new Array(num).fill(0);

  for (var i = 0; i < num; i++) {
    var d = await readUserInput(`x[${i}]: `);
    x[i] = Number(d);
  }
  console.log(x);

  console.log("y二次元配列を作ります。");
  a = await readUserInput(`行数: `);
  var height = Number(a)
  // 配列宣言
  var y = new Array(height);
  for (var i = 0; i < height; i++) {
    b = await readUserInput(`${i}目の行数: `);
    var width = Number(b);
    y[i] = new Array(width).fill(0);
  }

  for (var i = 0; i < y.length; i++) {
    for (var j = 0; j < y[i].length; j++) {
      var d = await readUserInput(`y[${i}][${j}]: `);
      y[i][j] = Number(d);
    }
  }





  console.log('1次元配列x');
  printArray1(x);

  console.log('2次元配列y');
  printArray2(y);

})();