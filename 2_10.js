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
  console.log("球の表面積と体積を求めます");
  const x = await readUserInput('半径:');
  x
  console.log(`表面積は${(4 * 3.14 * x * x)}です。`);
})();