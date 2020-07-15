var moment = require('moment');
var counter = 1;
class Account {
  constructor(n, no, balance, z, openDay) {
    this.name = n;
    this.long = z;
    this.no = no;
    this.balance = balance;
    this.openDay = openDay;
    this.id = counter++;
    console.log('口座開設ありがとうございます。');
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
  getId() {
    return this.id;
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

class Account2 {
  constructor(n, no, openDay) {
    this.name = n;
    this.no = no;
    this.openDay = openDay;
    this.id = counter++;
    console.log('口座開設ありがとうございます。');
  }

  getName() {
    return this.name;
  }

  getNo() {
    return this.no;
  }

  getOpenday() {
    return this.openDay;
  }
  getId() {
    return this.id;
  }
}

(async function main() {
  var ci1 = await readUserInput('開設口座数:');
  var ci = Number(ci1);
  var ary = new Array(ci).fill(0);


  for (var i = 0; i < ary.length; i++) {
    var t = await readUserInput('0..簡易 1..詳細:');
    var type = Number(t);

    var name = await readUserInput('名義:');
    var b = await readUserInput('番号:');
    var no = Number(b);
    if (type == 0) {
      ary[i] = new Account2(name, no, new moment(new Date(2020, 2, 2)));
      console.log('口座基本情報' + ary[i].getName() + ' No.' + ary[i].getNo() + 'id' + ary[i].getId());
    } else {

      var c = await readUserInput('残高:');
      var balance = Number(c);
      var a = await readUserInput('開設年:');
      var y = Number(a);
      var d = await readUserInput('開設月:');
      var m = Number(d);
      var e = await readUserInput('開設日:');
      var f = Number(e);
      day1 = moment(new Date(y, m, f));
      ary[i] = new Account(name, no, balance, new moment(new Date(y, m, f)), day1);

      console.log('口座基本情報' + ary[i].getName() + ' No.' + ary[i].getNo() + '   ' + ary[i].getBalance());
      day2 = ary[i].getOpenday();
      console.log(`識別番号${ary[i].getId()}`);
      dateT = ["日", "月", "火", "水", "木", "金", "土"];
      console.log(`開設日 ${day2.year()}年${day2.month()}月${day2.date()}日(${dateT[day2.day()]})`);
    }


  }





  // console.log(`開設日: ${ d1.year() }年${ d1.month() }月${ d1.date() }日(${ dateT[d1.day()]})`);

})();
