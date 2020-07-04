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
console.log('カウントダウンします');
// メイン処理
(async function main() {
  do {
    var a = await readUserInput('正の整数値:');
    var x = Number(a);
  } while (x <= 0);

  while (x >= 0) {
    console.log(x);
    x--;
  }

  console.log(`xの値は${x}になりました。`);

})();