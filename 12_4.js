const moment = require('moment')
class Car {
  constructor(name, width, height, length, fuel, day) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.length = length;
    this.fuel = fuel;
    this.day = day;
    this.x = 0.0;
    this.y = 0.0;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getFuel() {
    return this.fuel;
  }

  getPurchaseDay() {
    return this.day;
  }

  putSpec() {
    console.log('名前' + this.name);
    console.log('車幅' + this.width + 'mm');
    console.log('車高' + this.height + 'mm');
    console.log('車長' + this.length + 'mm');
  }

  move(dx, dy) {
    var dist = Math.sprt(dx * dx * dy * dy);

    if (dist > this.fuel) {
      return false;
    } else {
      this.fuel -= dist;
      x += dx;
      y += dy;
      return true;
    }
  }

}

var totalMileage = 0.0;
class ExCar extends Car {
  constructor(name, width, height, length, fuel, day) {
    super(name, width, height, length, fuel, day);
  }

  getTotalMileage() {
    return totalMileage;
  }

  putSpec() {
    console.log('総走行距離:' + totalMileage);
  }

  move(dx, dy) {
    var dist = Math.sqrt(dx * dx * dy * dy);

    if (!this.super.move(dx, dy)) {
      return false;
    } else {
      totalMileage += dist;
      return true;
    }
  }
}
dateT = ["日", "月", "火", "水", "木", "金", "土"];

// Carクラス
var car1 = new Car('W140', 1885, 1490, 5220, 95.0, moment(new Date(2015, 10, 13)));
// ExCarクラス
var car2 = new ExCar('W221', 1845, 1490, 5205, 90.0, moment(new Date(2015, 12 + 1, 24)));


var x = car1;
x = car2.getPurchaseDay();
console.log(x);

console.log(`購入日： ${x.year()}年${x.month()}月${x.date()}日(${dateT[x.day()]})`);

var y = car1;
var y = car2.getPurchaseDay();

console.log(`購入日： ${y.year()}年${y.month()}月${y.date()}日(${dateT[y.day()]})`);
console.log('yの総走行距離:' + car2.getTotalMileage());