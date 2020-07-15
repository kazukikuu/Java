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


  function singOf(n) {
    var sign = 0;

    if (n > 0) {
      sign = 1;
    } else if (n < 0) {
      sign = -1;
    }
    return sign;
  }

  const a = await readUserInput('整数x:');
  var x = Number(a);

  console.log(singOf(x));
  var s = singOf(x);

  console.log(`signOf(x)は${s}です。`);


})();