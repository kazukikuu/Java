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

  var sum = 0;
  var total = 0;
  Outer:
  for (var i = 1; i <= 10; i++) {
    console.log(`■第${i}グループ`);
    for (var j = 0; j < 5; j++) {
      var a = await readUserInput('整数:');
      var t = (Number(a));
      if (t === 99999) {
        break Outer;
      } else if (t == 88888) {
        continue Outer;
      }
      total += t;
    }
  }
  console.log(`合計は${total}です。`);

})();