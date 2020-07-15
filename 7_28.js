function readUserInput(question) {
  const readline = require('readline').createInterface({
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


function addMatrix(x, y) {
  var z = new Array(x.length).fill(0);
  for (var i = 0; i < x.length; i++) {
    z[i] = new Array(x[i].length).fill(0);
    for (let y = 0; y < x.length; y++) {
    }
    for (var j = 0; j < z[i].length; j++) {
      z[i][j] = x[i][j] + y[i][j]
    }
  }

  return z;
};


function printMatrix(m) {
  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {
      process.stdout.write(`${m[i][j]}  `);
    }
    console.log();
  }
};

// メイン処理
(async function main() {

  // 配列a作成
  console.log("a配列を作ります。");
  a = await readUserInput(`行数:`);
  var height = Number(a);
  b = await readUserInput(`行数の列数`);
  var width = Number(b);
  var c = new Array(height);

  // ここに問題あり
  for (var i = 0; i < height; i++) {
    c[i] = new Array(width).fill(0);
  }
  console.log(c);
  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < c[i].length; j++) {
      var d = await readUserInput(`a[${i}][${j}]: `);
      c[i][j] = Number(d);
    }
  }
  // ここまで



  console.log('配列aの各要素の値は次のようになっています。');
  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < c[i].length; j++) {
      process.stdout.write(`  ${c[i][j]}  `);
    }
    console.log();
  }

  console.log("b配列を作ります。");
  var b1 = new Array(height);

  for (var i = 0; i < height; i++) {
    b1[i] = new Array(width).fill(0);
  }
  console.log(b1);

  for (var i = 0; i < b1.length; i++) {
    for (var j = 0; j < b1[i].length; j++) {
      var d = await readUserInput(`b[${i}][${j}]: `);
      b1[i][j] = Number(d);
    }
  }


  console.log('配列bの各要素の値は次のようになっています。');
  for (var i = 0; i < b1.length; i++) {
    for (var j = 0; j < b1[i].length; j++) {
      process.stdout.write(`  ${b1[i][j]}  `);
    }
    console.log();
  }

  var k = addMatrix(c, b1);
  console.log(k);
  console.log(k.length);

  console.log('行列a');
  printMatrix(c);
  console.log('行列b');
  printMatrix(b1);
  console.log('行列c');
  printMatrix(k);

})();
// await readUserInput(``);
  // 連結配列
  // var c1 = c.concat(b1);
  // console.log(c1);
  // z = [];

  // c.forEach((value) => {
  //   b1.forEach((ba) => {
  //     z = value + ba;
  //   });
  // });

  // console.log(z);