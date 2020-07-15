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
  console.log("凹凸な2次元配列を作ります。");
  a = await readUserInput(`行数:`);
  var height = Number(a);

  var c = new Array(width);

  for (var i = 0; i < height; i++) {
    b = await readUserInput(`${i}行目の行数:`);
    var width = Number(b);
    c[i] = new Array(width).fill(0);
  }

  console.log('各要素の値を入力せよ');
  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < c[i].length; j++) {
      var d = await readUserInput(`c[${i}][${j}]: `);
      c[i][j] = d;
    }
  }
  console.log(c);
  console.log('配列cの各要素の値は次のようになっています。');
  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < c[i].length; j++) {
      process.stdout.write(`  ${c[i][j]}  `);
    }
    console.log();
  }




})();
// await readUserInput(``);
//