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
  const a = await readUserInput('整数値:');
  if (a > 0)
    console.log("その値は正です");
  else if (a < 0)
    console.log("その値は負です");
  else
    console.log('その値は０です');
})();