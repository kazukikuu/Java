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
  do {
    var a = await readUserInput('正の整数値: ');
    var x = (Number(a));
  } while (x <= 0);

  console.log(x);
  for (x >= 0; x--;) {
    console.log(x);
  }
})();