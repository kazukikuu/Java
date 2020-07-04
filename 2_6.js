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
  console.log(`10を加えた値は${(a + 10)}です。`);
  console.log(`10を減じた値は${(a - 10)}です。`);
})();