var moment = require('moment');
moment().format();
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
  console.log('日付を入力せよ。')
  var a = await readUserInput('年:');
  var y = Number(a);
  var b = await readUserInput('月:');
  var m = Number(b);
  var c = await readUserInput('日:');
  var d = Number(c);

  dateT = ["日", "月", "火", "水", "木", "金", "土"];

  var day1 = moment(new Date(y, m, d));
  console.log(`day1 = ${day1.year()}年${day1.month()}月${day1.date()}日 (${dateT[day1.day()]})`);
  var day2 = moment(new Date(day1));
  console.log('day2をday1と同じ日付で作りました');
  console.log(`day2 = ${day2.year()}年${day2.month()}月${day2.date()}日 (${dateT[day2.day()]})`);
  console.log('day1↓');
  if (day1 == day2) {
    console.log('day1とday2は等しいです。');
  } else {
    console.log('day1とday2は等しくありません。');
  }

  d1 = new moment(new Date(1, 1, 1));
  d2 = new moment(new Date(2010, 10));
  d3 = new moment(new Date(2010, 10, 15));
  d4 = new moment(new Date(2010, 10, 15));

  console.log(`d1 = ${d1.year()}年${d1.month()}月${d1.date()}日 (${dateT[d1.day()]})`);
  console.log(`d2 = ${d2.year()}年${d2.month()}月${d2.date()}日 (${dateT[d2.day()]})`);
  console.log(`d3 = ${d3.year()}年${d3.month()}月${d3.date()}日 (${dateT[d3.day()]})`);
  console.log(`d4 = ${d4.year()}年${d4.month()}月${d4.date()}日 (${dateT[d4.day()]})`);

  var r = new Array(3).fill(0);
  console.log(r);
  for (var i = 0; i < r.length; i++) {
    r[i] = new moment(new Date(2010, 10, 15));
  }

  for (var i = 0; i < r.length; i++) {
    console.log(`r[${i}] = ${r[i].year()}年${r[i].month()}月${r[i].date()}日 (${dateT[r[i].day()]})`);
  }

})();
