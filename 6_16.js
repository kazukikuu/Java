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
  var dayEnglish = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayJapanese = ["日", "月", "火", "水", "木", "金", "土"];
  console.log('英語の曜日名を入力してください');

  var retry;
  var last = -1;

  do {
    var day;
    do {
      day = Math.floor(Math.random() * (7 - 0)) + 0
    } while (day === last);
    last = day;

    while (true) {
      var s = await readUserInput(`${dayJapanese[day]}曜日:`);
      if (s === dayEnglish[day]) {
        break;
      }
      console.log('違います。');
    }
    console.log('正解です。もう一度？ 1...Yes/0...No');
    retry = await readUserInput(``);
  } while (Number(retry) === 1);
  // process.stdout.write(``);

})();