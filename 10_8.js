var moment = require('moment');
const { info } = require('console');
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

// 閏年か
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

// メイン処理
(async function main() {
  console.log('日付を入力せよ。');
  var a = await readUserInput('年:');
  var y = Number(a);
  var b = await readUserInput('月:');
  var m = Number(b) - 1;
  var c = await readUserInput('日:');
  var d = Number(c);

  dateT = ["日", "月", "火", "水", "木", "金", "土"];

  var day1 = moment(new Date(y, m, d));

  console.log(day1);


  var m = await readUserInput('1.日付けに関する情報を表示 2.日付を変更 3.他の日付との比較 4.前後の日付を求める 5.終了');
  var menu = Number(m);

  switch (menu) {
    case 1:
      info1();
      break;
    case 2:
      var m2 = await readUserInput('1.年月日を変更 2.年を変更 3.月を変更 4.日を変更 5.一日進める 6.1日もどす 7.n日進める 8.n日もどす :');
      var menu2 = Number(m2);
      switch (menu2) {
        case 1:
          var a = await readUserInput('年:');
          var y = Number(a);
          var b = await readUserInput('月:');
          var m = Number(b) - 1;
          var c = await readUserInput('日:');
          var d = Number(c);
          var day1 = moment(new Date(y, m, d));
          break;
        case 2:
          var a = await readUserInput('年:');
          var y = Number(a);
          var day1 = moment(new Date(y, m, d));
          break;

        case 3:
          var b = await readUserInput('月:');
          var m = Number(b);
          var day1 = moment(new Date(y, m, d));

          break;

        case 4:
          var c = await readUserInput('日:');
          var d = Number(c);
          var day1 = moment(new Date(y, m, d));
          console.log(`${day1.year()}年${day1.month()}月${day1.date()}日 (${dateT[day1.day()]})`);
          break;

        case 5:
          day1 = moment(moment(day1).add(1, 'd').format());
          console.log(day1);
          break;
        case 6:
          day1 = moment(moment(day1).subtract(1, 'd').format());
          break;
        case 7:
          var n1 = await readUserInput('n日後:');
          var n2 = Number(n1);
          day1 = moment(moment(day1).add(n2, 'd').format());
          console.log(`${day1.year()}年${day1.month()}月${day1.day()}日 (${dateT[day1.day()]})に更新されました`);
          break;
        case 8:

          var n1 = await readUserInput('n日前:');
          var n2 = Number(n1);
          day1 = moment(moment(day1).subtract(n2, 'd').format());
          console.log(`${day1.year()}年${day1.month()}月${day1.day()}日 (${dateT[day1.day()]})`);
          console.log(`${day1.year()}年${day1.month()}月${day1.day()}日 (${dateT[day1.day()]})に更新されました`);
          break;

      }
      console.log(`${day1.year()}年${day1.month()}月${day1.day()}日 (${dateT[day1.day()]})`);
      break;
    case 3:
      console.log('比較対象の日付を入力せよ');
      var a2 = await readUserInput('年:');
      var y2 = Number(a2);
      var b2 = await readUserInput('月:');
      var m2 = Number(b2);
      var c2 = await readUserInput('日:');
      var d2 = Number(c2);
      var day2 = moment(new Date(y, m, d));

      if (day1.isAfter(day2)) {
        console.log(`${day1.year()}年${day1.month()}月${day1.day()}日 (${dateT[day1.day()]})の方が後`);
      } else {
        console.log(`${day2.year()}年${day2.month()}月${day2.day()}日 (${dateT[day2.day()]})の方が後`);
      }
    // ok
    case 4:
      var m3 = await readUserInput('1.翌日 2.前日 3.n日後 4.n日前 :');
      var menu3 = Number(m3);
      switch (menu3) {
        case 1:
          day1 = moment(moment(day1).add(1, 'd').format());
          console.log(day1);
          console.log(`${day1.year()}年${day1.month()}月${day1.day()}日 (${dateT[day1.day()]})`);
          break;
        case 2:
          day1 = moment(moment(day1).subtract(1, 'd').format());
          console.log(`${day1.year()}年${day1.month()}月${day1.day()}日 (${dateT[day1.day()]})`);
          break;
        case 3:
          var n1 = await readUserInput('n日後:');
          var n2 = Number(n1);
          day1 = moment(moment(day1).add(n2, 'd').format());
          console.log(`${day1.year()}年${day1.month()}月${day1.day()}日 (${dateT[day1.day()]})`);
          break;
        case 4:
          var n1 = await readUserInput('n日前:');
          var n2 = Number(n1);
          console.log(day1);
          day1 = moment(moment(day1).subtract(n2, 'd').format());
          console.log(day1)
          console.log(`${day1.year()}年${day1.month() + 1}月${day1.day() + 20}日 (${dateT[day1.day()]})`);
          break;
      }
    case 5:
      break;

  }

  function info1() {


    console.log(`${day1.year()}年${day1.month()}月${day1.day()}日 (${dateT[day1.day()]})に関する情報`);
    if (isLeapYear(day1.year())) {
      console.log('うるう年です');
    } else {
      console.log('はうるう年ではありません');
    }

    var dateTo = moment(new Date(y, 1 - 1, 1));
    console.log(dateTo);
    var dateTo2 = moment(new Date(y, 12 - 1, 31));
    console.log(dateTo2);
    console.log('年内経過日数: ' + day1.diff(dateTo, 'days'));
    console.log('年内残り日数: ' + dateTo2.diff(day1, 'days'));

    moment().subtract(360, 'days')
    moment().subtract({ days: 7, months: 1 })
  }


})();
