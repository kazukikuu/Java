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

    const x = await readUserInput('整数値:');
    console.log(`${x}と入力しましたね`);
    if (x > 0) {
      console.log('その値は正です。');
    } else if (n < 0) {
      console.log('その値は負です。');
    } else {
      console.log('その値は0です。');
    }

    console.log('もい一度? 1...Yes/0...NO :');
    var retry = await readUserInput('');
  } while (Number(retry) === 1);
})();