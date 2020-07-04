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
  a = parseInt(x);
  console.log(`最下位桁を除いた値は${Math.floor(a / 10)}です。`);
  console.log(`最下位桁は${(a % 10)}です。`);
})();