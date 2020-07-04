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
  var a = await readUserInput('整数a:');
  var x = Number(a);
  var b = await readUserInput('整数b:');
  var y = Number(b);
  if (x > y) {
    let t = x;
    x = y;
    y = t;
  }
  do {
    console.log(x + ' ');
    x += 1;
  } while (x <= y);
})();