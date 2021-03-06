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
  var sum = 0;
  do {
    var a = await readUserInput('nの値: ');
    var n = (Number(a));
  } while (n <= 0);
  for (var i = 1; i <= n; i++) {
    process.stdout.write(`${i} + `);
    sum += i;
  }

  process.stdout.write(`${n} =`);
  process.stdout.write(` ${sum} `);
})();