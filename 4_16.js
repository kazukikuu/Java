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
  var hMin = await readUserInput('何cmから: ');
  var hMax = await readUserInput('何cmまで: ');
  var step = await readUserInput('何cmまで: ');

  console.log('身長 標準体重');
  console.log('-----------');

  for (var i = Number(hMin); i <= Number(hMax); i += Number(step)) {
    process.stdout.write(`${i}  `);
    console.log(`${Number(i), 0.9 * (Number(i) - 100)} `);
  }
})();