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
  const a = await readUserInput('xの値:');
  const b = await readUserInput('yの値:');
  const c = await readUserInput('zの値:');
  const x = Number(a);
  const y = Number(b);
  const z = Number(c);

  const ave = (x + y + z) / 3;
  console.log(`xとyとzの平均値は${Math.floor(ave)}です。`);
})();