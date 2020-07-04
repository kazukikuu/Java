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
  console.log('数字ピラミッドを表示します');
  var a = await readUserInput('段数は: ');
  var n = (Number(a));

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n - i; j++) {
      process.stdout.write(' ');
    }
    for (j = 1; j <= 2 * i - 1; j++) {
      process.stdout.write(`${i % 10}`);
    }
    console.log();
  }
})();