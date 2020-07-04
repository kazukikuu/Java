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
  var a = await readUserInput('整数値: ');
  var n = (Number(a));
  var count = 0;

  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
      count++;
    }

  }

  console.log(`約数は${count}個です。`);

})();