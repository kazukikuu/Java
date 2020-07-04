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
  console.log('整数を加算します。:');
  var a = await readUserInput('何個加算しますか:');
  var n = (Number(a));
  var sum = 0;
  // n = 何回ループさせるか
  for (var i = 0; i < n; i++) {
    var b = await readUserInput('整数(0で終了) :');
    var t = (Number(b));
    // 合計、平均を求める値を入れる
    if (t === 0) {
      break;
    }
    sum += t;
  }

  console.log(`合計は${sum}です`);
  if (i != 0) {
    console.log(`平均は${sum / i}です`);
  }
})();