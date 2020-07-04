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
  var i = 1;
  var digits = 0;
  var factorial = 1;
  do {
    var a = await readUserInput('正の整数値: ');
    var x = (Number(a));
  } while (x <= 0);

  while (i <= x) {
    factorial *= i;
    i++;
  }
  console.log(`1から${x}までの積は${factorial}です。`);
})();