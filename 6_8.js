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
    var y = await readUserInput('');
    a[i] = Number(y);
  }

  const c = await readUserInput('探す数値: ');
  var x = Number(c);

  console.log(`それは[${a.indexOf(x)}]にあります`);
})();