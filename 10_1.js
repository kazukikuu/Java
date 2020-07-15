var counter = 0;
class Human {
  constructor(n, h, w) {
    this.name = n;
    this.height = h;
    this.weight = w;
    this.id = ++counter;
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
  getId() {
    return this.id;
  }
  putData() {
    console.log(`名前${this.name}`);
    console.log(`身長${this.height}cm`);
    console.log(`体重${this.weight}kg`);
  }
  static getCounter() { // 取得はstaticメソッドを使う
    return counter;
  }
}
var suzuki = new Human('鈴木二郎', 170, 60);
var takada = new Human('高田龍一', 166, 72);
suzuki.putData();
console.log(`番号: ${suzuki.getId()}`);
takada.putData();
console.log(`番号: ${takada.getId()}`);
console.log(Human.getCounter());
