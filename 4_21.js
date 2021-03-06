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
  console.log('正方形を表示します。');
  var a = await readUserInput('段数は: ');
  var n = (Number(a));

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      process.stdout.write('*');
    }
    console.log();
  }

})();