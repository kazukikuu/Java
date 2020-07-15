class Human {
  name;
  height;
  weight;
  constructor(n, h, w) {
    this.name = n;
    this.height = h;
    this.weight = w;
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

  gainWeight(w) {
    this.weight += w;
  }

  reduceWeight(w) {
    this.weight -= w;
  }

}

var suzuki = new Human('鈴木次郎', 170, 60);
var takada = new Human('高田龍一', 166, 72);

suzuki.gainWeight(3);
takada.reduceWeight(5);

console.log(`名前:${suzuki.getName()}`);
console.log(`身長:${suzuki.getHeight()}`);
console.log(`体重:${suzuki.getWeight()}`);
console.log();
console.log(`名前:${takada.getName()}`);
console.log(`身長:${takada.getHeight()}`);
console.log(`体重:${takada.getWeight()}`);
