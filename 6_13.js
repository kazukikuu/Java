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
  const b = await readUserInput('要素数: ');
  var n = Number(b);
  var a = [];
  for (var i = 0; i < n; i++) {
    var y = await readUserInput(`a[${i}] = `);
    a[i] = Number(y);

  }
  // console.log(getRandomInt(n));

  for (var i = 0; i < 2 * n; i++) {
    var idx1 = Math.floor(Math.random() * (n - 0)) + 0;
    var idx2 = Math.floor(Math.random() * (n - 0)) + 0;
    var t = a[idx1];
    a[idx1] = a[idx2];
    a[idx2] = t;
  }

  console.log('要素をかき混ぜました');

  for (var i = 0; i < n; i++) {
    console.log(`a[${i}] = ${a[i]}`);
  }
})();
