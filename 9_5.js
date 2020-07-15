var moment = require('moment');
class Account {
  constructor(n, no, balance, z, openDay) {
    this.name = n;
    this.long = z;
    this.no = no;
    this.balance = balance;
    this.openDay = openDay;
  }

  getName() {
    return this.name;
  }

  getNo() {
    return this.no;
  }

  getBalance() {
    return this.balance;
  }

  deposit(k) {
    return this.balance += k;
  }

  withbraw(k) {
    return this.balance -= k;
  }

  getOpenday() {
    return this.openDay;
  }

}

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

(async function main() {
  console.log('口座情報を入力せよ');
  var name = await readUserInput('名義:');
  var b = await readUserInput('番号:');
  var no = Number(b);
  var c = await readUserInput('残高:');
  var balance = Number(c);
  console.log(balance);
  var a = await readUserInput('開設年:');
  var y = Number(a);
  var d = await readUserInput('開設月:');
  var m = Number(d);
  var e = await readUserInput('開設日:');
  var f = Number(e);
  day1 = moment(new Date(y, m, f));
  ac = new Account(name, no, balance, new moment(new Date(y, m, f)), day1);
  console.log('口座基本情報' + ac.getName() + '  ' + ac.getNo() + '   ' + ac.getBalance());
  day2 = ac.getOpenday();
  dateT = ["日", "月", "火", "水", "木", "金", "土"];
  console.log(`開設日 ${day2.year()}年${day2.month()}月${day2.date()}日 (${dateT[day2.day()]})`);
  // console.log(`開設日: ${d1.year()}年${d1.month()}月${d1.date()}日 (${dateT[d1.day()]})`);

})();
