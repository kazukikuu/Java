class Car {
  name;
  number;
  width;
  height;
  length;
  x;
  y;
  tankage;
  fuel;
  sfc;

  constructor(name, number, width, height, length, tankage, fuel, sfc) {
    this.name = name;
    this.number = number;
    this.width = width;
    this.height = height;
    this.length = length;
    this.tankage = tankage;
    if (this.fuel <= this.takada) {
      this.fuel = w;
    } else {
      this.fuel = this.takada;
    }
    this.sfc = sfc;
  }
  // メソッド
  getX() {
    return this.x;
  }
  // メソッド
  getY() {
    return this.y;
  }

  getFuel() {
    return this.fuel;
  }

  putSpec() {
    console.log(`名前${this.name}`);
    console.log(`ナンバー${this.number}`);
    console.log(`車幅${this.width}mm`);
    console.log(`車高${this.height}mm`);
    console.log(`車長${this.length}mm`);
    console.log(`タンク${this.tankage}リットル`);
    console.log(`燃費${this.sfc}km/リットル`);
  }

  move(dx, dy) {
    var dist = dx * dx + dy * dy;
    var f = dist / sfc;


    if (f > fuel) {
      return false;
    } else {
      fuel -= f;
      x += dx;
      y += dy;
      return true;
    }
  }

  refuel(df) {
    if (df > 0) {
      this.fuel += df;
      if (this.fuel > this.tankage) {
        fuel = this.tankage;
      }
    }
  }

}

var vitz = new Car('ピッツ', '福岡999999', 1660, 1500, 3640, 40.0, 35.0, 12.0);

vitz.putSpec();
