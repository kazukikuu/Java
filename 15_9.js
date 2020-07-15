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
function printDouble(x, p, w) {
  console.log(x.toFixed(p));
}

// メイン処理
(async function main() {
  var s1 = await readUserInput('実数値: ');
  var x = Number(s1);
  var s2 = await readUserInput('表示全桁数: ');
  var w = Number(s2);
  var s3 = await readUserInput('小数部桁数: ');
  var p = Number(s3);

  printDouble(x, p, w);
})();