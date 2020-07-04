// ランダム生成 10~99
var no = Math.floor(Math.random() * (99 - 10) + 10);
console.log('数当てゲーム開始!!');
console.log('10~99の数を当ててください');


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
  var MAX_NO = 6;
  var leftNo = MAX_NO;
  var no = Math.floor(Math.random() * (99 - 10) + 10);

  console.log('数当てゲーム開始!!');
  console.log('0~99の数を当ててください');
  do {
    var a = await readUserInput(`残り${leftNo--}回。いくつかな`);
    var x = Number(a);

    if (x > no) {
      console.log('もっと小さな数だよ');
    } else if (x < no) {
      console.log('もっと大きな数だよ');
    }
  } while (x != no && leftNo > 0);

  if (x == no) {
    console.log(`${MAX_NO - leftNo} 回で当たりましたね。`);
  } else {
    console.log(`残念。正解は${no}でした。`);
  }
})();
