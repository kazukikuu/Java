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
    var x = await readUserInput('3桁の正の整数値:');
    x = Number(x);
  } while (x < 100 || x > 999);
  console.log(`${x}と入力しましたね。`);
})();