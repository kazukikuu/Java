const { type } = require("os");

class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}


class Dog extends Animal {
  constructor(name, type) {
    super(name)
    this.type = type;
  }

  bark() {
    console.log('ワンワン！');
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  bark() {
    console.log('ニャーン!');
  }
}


var a = Array(2).fill

a[0] = new Dog('ハチ公', '柴犬');
a[1] = new Cat('マイケル', 7);
console.log(a[1]);
b = new Animal('っっk',)
console.log(b);

for (var i = 0; i < a.length + 1; i++) {
  console.log(a[i].name);
  a[i].bark();
  console.log();
}
