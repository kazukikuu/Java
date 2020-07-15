var counter = 0;
class Id {
  id;
  constructor() {
    this.id = ++counter;
  }

  getId() {
    return this.id;
  }

}

var a = new Id();
var b = new Id();

console.log(`aの識別番号${a.getId()}`);
console.log(`bの識別番号${b.getId()}`);

console.log(`Id.counter = ${counter}`);
console.log(`a.counter = ${a.getId()}`);
console.log(`b.counter = ${b.getId()}`);
console.log('最後に与えた識別番号:' + counter);
