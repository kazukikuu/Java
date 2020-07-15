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



(async function main() {
  var c = await readUserInput('要素数: ');
  var num = Number(c);
  var x = new Array(num).fill(0);

  for (var i = 0; i < num; i++) {
    var d = await readUserInput(`x[${i}]:`);
    x[i] = Number(d);
  }

  // console.log(x);


  var e = await readUserInput(`削除する開始インデックス:`);
  var idx = Number(e);
  var f = await readUserInput(`削除する要素の個数:`);
  var n = Number(f);


  x.splice(idx, n);
  var y = x;

  for (var i = 0; i < y.length; i++) {
    console.log(`y[${i}] = ${y[i]}`);
  }



})();