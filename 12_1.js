var name;
var width;
var height;
var length;
var x;
var y;
var fuel;
var day;

class Car {
  constructor(name, width, height, length, fuel, day) {
    this.name = name;
    this.width = width;
    this.length = length;
    this.fuel = fuel;
    this.x = 0.0;
    this.y = 0.0;
    this.fuel = fuel;
    this.day = day;
  }

  getX() {
    return x;
  }

  getY() {
    return y;
  }

  getFuel() {
    return fuel;
  }

  getPurchaseDay() {
    return this.day;
  }

  putSpec() {
    console.log('名前' + name);
    console.log('車幅' + width + 'mm');
    console.log('車高' + height + 'mm');
    console.log('車長' + length + 'mm');
  }

  move(dx, dy) {
    var dist = Math.sprt(dx * dx * dy * dy);

    if (dist > this.fuel) {
      return false;
    } else {
      fual -= dist;
      x += dx;
      y += dy;
      return true;
    }
  }

}

var totalMileage = 0.0;
class ExCar extends Car {
  super(name, width, length, fuel, day) {

  }

  getTotalMileage() {
    return totalMileage;
  }

  putSpec() {
    this.super.putSpec();
    console.log('総走行距離:' + totalMileage);
  }

  move(dx, dy) {
    var dist = Math.sprt(dx * dx * dy * dy);

    if (!this.super.move(dx, dy)) {
      return false;
    } else {
      totalMileage += dist;
      return true;
    }


  }


}

// a = new ExCar();

// console.log(a);