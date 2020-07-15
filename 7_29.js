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


function aryClone(c) {
  var z = new Array(c.length).fill(0);
  for (var i = 0; i < c.length; i++) {
    z[i] = new Array(c[i].length).fill(0);
    for (let j = 0; j < c[i].length; j++) {
      z[i][j] = c[i][j];
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




  console.log('行列a');
  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < c[i].length; j++) {
      process.stdout.write(`  ${c[i][j]}  `);
    }
    console.log();
  }

  var ca = aryClone(c);


  console.log('行列a');
  printMatrix(c);


  console.log('行列aの複製');
  printMatrix(ca);
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