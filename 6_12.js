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

  var y = Math.floor(Math.random() * (10 - 1)) + 1;
  a[0] = 1 + Number(y);

  for (var i = 0; i < n; i++) {
    do {
      var z = Math.floor(Math.random() * (10 - 1)) + 1;
      a[i] = 1 + Number(z);
    } while (a[i] === a[i - 1]);
  }



  for (var i = 0; i < n; i++) {
    console.log(`a[${i}] = ${a[i]}`);
  }
})();