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

var timeBalance;
class TimeAccount extends Account {
  constructor(name, no, balance, timeBalance) {
    super(name, no, balance);
    this.timeBalance = timeBalance;
  }
  getTimeBalance() {
    return timeBalance;
  }

  cancel() {
    this.deposit(timeBalance);
    timeBalance = 0;
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
  var adachi = new Account('足立幸一', '123456', 500);
  var nakata = new TimeAccount('仲田真二', '65432', 300, 400);

  console.log('足立君と仲田君の貯金残高比較結果です。');

  if (adachi.balance < nakata.balance) {
    console.log('仲田君の方が貯金残高が多い');
  } else if (adachi.balance > nakata.balance) {
    console.log('足立君の方が貯金残高が多い');
  } else {
    console.log('貯金残高は同じ');
  }



})();
