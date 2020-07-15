var moment = require('moment');
class Human {
  constructor(n, h, w, birthday) {
    this.name = n;
    this.height = h;
    this.weight = w;
    this.birthday = birthday;
  }
  // メソッド
  getName() {
    return this.name;
  }
  // メソッド
  getHeight() {
    return this.height;
  }

  getWeight() {
    return this.weight;
  }

  getBirthday() {
    return this.birthday;
  }

  gainWeight(w) {
    this.weight += w;
  }

  reduceWeight(w) {
    this.weight -= w;
  }

}
dateT = ["日", "月", "火", "水", "木", "金", "土"];
var suzuki = new Human('鈴木次郎', 170, 60, moment(new Date(1999, 1, 2)));
var takada = new Human('高田龍一', 166, 72, moment(new Date(1967, 10, 9)));

suzuki.gainWeight(3);
suzuki.getBirthday();
takada.reduceWeight(5);
day1 = suzuki.getBirthday();
day2 = takada.getBirthday();
console.log(`名前:${suzuki.getName()}`);
console.log(`身長:${suzuki.getHeight()}`);
console.log(`体重:${suzuki.getWeight()}`);
console.log(`${day1.year()}年${day1.month()}月${day1.date()}日(${dateT[day1.day()]})生まれ`);
console.log();
console.log(`名前:${takada.getName()}`);
console.log(`身長:${takada.getHeight()}`);
console.log(`体重:${takada.getWeight()}`);
console.log(`開設日 ${day2.year()}年${day2.month()}月${day2.date()}日 (${dateT[day2.day()]})`);
