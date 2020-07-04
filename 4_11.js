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
  var a = await readUserInput('何個*を表示しますか: ');
  var x = (Number(a));
  if (x > 0) {
    for (var i = 0; i < x; i++) {
      process.stdout.write('*');
    }
  }

})();