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
// メイン処理
(async function main() {
  console.log('行列aの要素の値を入力せよ。');
  var a = new Array(4);
  for (let y = 0; y < 4; y++) {
    a[y] = new Array(1).fill(0);
    for (var j = 0; j < 3; j++) {

      // 値入力
      n = await readUserInput(`a[${y}][${j}] :`);
      a[y][j] = Number(n);
    }
  }
  console.log('行列bの要素の値を入力せよ。');
  var b = new Array(3);
  for (let y = 0; y < 3; y++) {
    b[y] = new Array(1).fill(0);
    for (var j = 0; j < 4; j++) {

      // 値入力
      n = await readUserInput(`b[${y}][${j}] :`);
      b[y][j] = Number(n);
    }
  }

  console.log(a);
  console.log(b);


  // たぶんこのfor文で、c配列にaとbをかけた数が代入されていないのが原因

  // var c = (new Array(4)).fill(0);

  var c = new Array(4);
  for (let y = 0; y < 4; y++) {
    c[y] = new Array(4).fill(0);
  }


  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      for (var k = 0; k < 3; k++) {
        c[i][j] += a[i][k] * b[k][j];
        console.log(c[i][j]);
      }
    }
  }


  console.log('行列aとbの積');
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      process.stdout.write(` ${c[i][j]} `);
    }
    console.log();
  }

})();
