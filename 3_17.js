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
  if (a === b) {
    console.log('２つの値は同じです');
  } else {
    if (a < b) {
      min = a;
      max = b;
    } else {
      min = b;
      max = a;
    }

    console.log(`小さい方の値は${min}です`);
    console.log(`大きい方の値は${max}です`);
  }
})();