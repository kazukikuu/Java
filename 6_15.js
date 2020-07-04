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
  // const s = await readUserInput(`${month + 1}月`);
  var monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "	December"];
  var retry;
  var last = -1;
  console.log('英語の月名を入力してください');
  console.log('なお、先頭は大文字で、2文字目以降は小文字とします');

  do {
    var month;
    do {
      month = Math.floor(Math.random() * (13 - 0)) + 0
    } while (month === last);
    last = month;

    while (true) {
      var s = await readUserInput(`${month}月:`);
      if (s === monthString[month - 1]) {
        break;
      }
      console.log('違います');
    }
    console.log('正解です。もう一度？ 1...Yes/0...No');
    retry = await readUserInput(``);
  } while (Number(retry) === 1);
  // process.stdout.write(``);

})();