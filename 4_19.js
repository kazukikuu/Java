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
  var a = await readUserInput('nの値: ');
  var n = (Number(a));

  for (var i = 1; i <= n; i++) {
    console.log(`${i}の2乗は${i * i}`);
  }
})();