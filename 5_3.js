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
  console.log('変数xはfloat型で、変数yはdouble型です');
  const a = await readUserInput('変数x:');
  const b = await readUserInput('変数y:');
  const x = parseFloat(a).toFixed(8);
  const y = parseFloat(b).toFixed(17);
  console.log(`x = ${x}`);
  console.log(`y = ${y}`);
})();

// 0.12345678901234567890