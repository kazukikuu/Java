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

var mycar = new ExCar('W140', 1885, 1490, 5220, 95.0, moment(new Date(2015, 10, 13)));
dateT = ["日", "月", "火", "水", "木", "金", "土"];
console.log(mycar.name);

console.log(`名前：${mycar.name}`);
console.log(`車幅:${mycar.width}`);
console.log(`車高:${mycar.height}`);
console.log(`車長：${mycar.length}`);
console.log(`総走行距離：${totalMileage}km`);