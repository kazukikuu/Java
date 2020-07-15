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
    super.putSpec();
    console.log('総走行距離:' + totalMileage + 'km');
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

// ExCarクラス
var car1 = new ExCar('W140', 1885, 1490, 5220, 95.0, moment(new Date(2015, 10, 13)));

car1.putSpec();
