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
  let x = await readUserInput('整数値:');
  let num = 5;
  a = parseInt(x) + num;
  console.log(a);
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log("その値の+5の乱数を生成しました。");
  console.log((`値は${getRandomInt(a)}です。`));
})();
