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
  const c = await readUserInput('変数c:');

  if ((b >= a && c <= a) || (b <= a && c >= a)) {
    med = a;
  } else if ((a > b && c < b) || (a < b && c > b)) {
    med = b;
  } else {
    med = c;
  }


  console.log(`中央値は${med}です`);
})();
