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
// 標準入力
function readUserInput(question) {
  var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    readline.question(question, (answer) => {
      resolve(answer);
      readline.close();
    });
  });
}

// 一次配列展開
function printArray1(a) {
  for (var i = 0; i < a.length; i++) {
    console.log(`No${i} ${a[i].getName()} ${a[i].getHeight()}cm ${a[i].getWeight()}kg `);
  }
}


(async function main() {

  var p = new Array(2);
  // 配列1つめ
  p[0] = new Human('田中太郎', 170, 70);
  p[1] = new Human('高野二郎', 160, 55);

  console.log(p[1]);
  // 配列2つめ

  var c = await readUserInput('配列qの要素数: ');
  var n = Number(c);
  var q = new Array(n);

  for (var i = 0; i < q.length; i++) {
    process.stdout.write(`q${i}`);
    var name = await readUserInput('名前:');
    var e = await readUserInput('身長:');
    var height = Number(e);
    var f = await readUserInput('体重:');
    var weight = Number(f);
    q[i] = new Human(name, height, weight);
  }

  console.log(q);

  // ３つめ

  var x = new Array(2);
  p[0] = new Human('田中太郎', 170, 70);
  p[1] = new Human('高野二郎', 160, 55);





  // ４つめ
  var x = new Array(2);
  for (let y = 0; y < 3; y++) {
    x[y] = new Array(2).fill(0);
  }

  x = [
    [
      new Human('武田', 180, 76),
      new Human('三井', 155, 49),
      new Human('清水', 170, 69)
    ],
    [
      new Human('江田', 160, 60),
      new Human('近江', 155, 50),
      new Human('斎藤', 150, 49)
    ]
  ]

  a = await readUserInput(`配列yの行数: `);
  var height = Number(a);
  // 配列宣言
  var y = new Array(height);
  for (var i = 0; i < height; i++) {
    b = await readUserInput(`y[${i}]目の列数: `);
    var width = Number(b);
    y[i] = new Array(width).fill(0);
  }

  for (var i = 0; i < y.length; i++) {
    for (var j = 0; j < y[i].length; j++) {
      process.stdout.write(`y[${i}][${j}]: `);
      var name = await readUserInput(`名前:`);
      var g = await readUserInput(`身長:`);
      var height = Number(g);
      var h = await readUserInput(`体重:`);
      var weight = Number(h);
      y[i][j] = new Human(name, height, weight);
    }
  }
  console.log(y);

  console.log('配列p');
  printArray1(p);
  console.log("配列q");
  printArray1(q);

  console.log("配列y");
  for (var i = 0; i < y.length; i++) {
    console.log(`第${i}行`);
    printArray1(y[i]);
  }
  console.log("配列x");
  for (var i = 0; i < x.length; i++) {
    console.log(`第${i}行`);
    printArray1(x[i]);
  }





})();
