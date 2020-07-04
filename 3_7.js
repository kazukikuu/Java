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
  const a = await readUserInput('変数a:');
  const b = await readUserInput('変数b:');
  if (a > b) {
    console.log('aの方が大きいです。');
  } else if (a < b) {
    console.log('bの方が大きいです');
  } else {
    console.log('aとbは同じです。');
  }

})();