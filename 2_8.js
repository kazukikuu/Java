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
  const x = await readUserInput('xの値 :');
  const y = await readUserInput('yの値 : ');
  a = parseInt(x);
  b = parseInt(y);
  console.log(`合計は${(a + b)}です。`);
  console.log(`平均は${(a + b) / 2}です。`);
})();