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

  process.stdout.write('{');

  if (n >= 2) {
    for (var i = 0; i < n - 1; i++) {
      process.stdout.write(`${a[i]}, `);
    }
  }
  if (n >= 1) {
    process.stdout.write(`${a[n - 1]}`);
  }

  process.stdout.write('}');

})();
