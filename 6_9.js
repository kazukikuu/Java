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
  var sum = 0;
  for (var i = 0; i < n; i++) {
    console.log(`a[${i}]= `);
    var y = await readUserInput('');
    a[i] = Number(y);
  }
  // ここまで配列作成

  a.forEach((i) => {
    sum += i;
  });

  console.log(`全要素の合計は${sum}です。`);
  console.log(`全要素の平均は${sum / n}です。`);


})();
