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
  var a = await readUserInput('何個表示させますか:');
  var n = Number(a);
  var i = 0;
  if (n > 0) {
    while (i < n) {
      if (i % 2 === 0) {
        process.stdout.write('*');
      } else {
        process.stdout.write('+');
      }
      i++;
    }
  }
})();