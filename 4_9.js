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
  var i = 0;
  var digits = 0;
  do {
    var a = await readUserInput('正の整数値の桁数を求めます。');
    var x = (Number(a));
  } while (x <= 0);

  while (x > 0) {
    digits++;
    x = x / 10;
    x = Math.round(x);
    console.log(x);
  }

  console.log(`その値は${digits}桁です。`);

})();