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
  var c = [];
  for (var i = 0; i < n; i++) {
    var y = await readUserInput(`a[${i}] = `);
    a[i] = Number(y);

  }
  // console.log(getRandomInt(n));
  for (var i = 0; i < n; i++) {
    c[i] = a[n - i - 1];
  }
  console.log('aの全要素を逆順にbにコピーしました');
  for (var i = 0; i < n; i++) {
    console.log(`b[${i}] = ${c[i]}`);
  }

})();
