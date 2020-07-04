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
  var a = await readUserInput('何個*を表示させますか:');
  var n = Number(a);
  var i = 0;
  if (n > 0) {
    while (i < n) {
      process.stdout.write('*');
      i++;
    }
  }
})();