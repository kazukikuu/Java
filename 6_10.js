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
  const b = await readUserInput('要素数: ');
  var n = Number(b);
  var a = [];
  for (var i = 0; i < n; i++) {
    console.log(`a[${i}]= `);
    var y = Math.floor(Math.random() * (10 - 1)) + 1;
    a[i] = Number(y);
    console.log(`${a[i]}`);
  }

  // ここまでok

  // ここから {要素}の表示


})();
