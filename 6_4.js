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
  const x = await readUserInput('要素数: ');
  const n = Number(x);
  const a = [...Array(n)].map(() => 0);
  for (var i = 0; i < n; i++) {
    a[i] = 1 + Math.floor(Math.random() * (10 - 0) + 0);
  }
  // ここまでok

  for (var i = 10; i >= 1; i--) {
    for (var j = 0; j < n; j++) {
      if (a[j] >= i) {

        process.stdout.write('* ');
      } else {
        process.stdout.write('  ');
      }
    }
    console.log();
  }

  for (var i = 0; i < 2 * n; i++) {
    process.stdout.write('_');
  }
  console.log();

  for (var i = 0; i < n; i++) {
    process.stdout.write(`${i % 10} `);
  }
  console.log();

})();