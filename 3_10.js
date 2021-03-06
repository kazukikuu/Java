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
  const x = await readUserInput('整数値:');
  if (x > 0) {
    if (x % 3 === 0) {
      console.log('その値は3で割り切れます');
    } else if (x % 3 === 1) {
      console.log('その値は3で割った余りは1です。');
    } else {
      console.log('その値を3で割った余りは2です。')
    }
  } else {
    console.log('正でない値が入力されました');
  }
})();