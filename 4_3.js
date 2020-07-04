

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

  do {
    console.log('いくつかな:');
    // xの値を入力
    var a = await readUserInput('整数値:');
    var x = Number(a);
    if (x > no) {
      console.log('もっと小さな数だよ');
    } else if (x < no) {
      console.log('もっと大きな数だよ');
    }
  } while (x != no);

  console.log('正解です。');
})();
