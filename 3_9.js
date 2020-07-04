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
  const x = await readUserInput('整数値:');
  if (x > 0) {
    if (x % 10 === 0) {
      console.log("その値は10の倍数です");
    } else {
      console.log("その値は10の倍数ではありません。");
    }
  } else {
    console.log("正でない値が入力されました");
  }
})();
