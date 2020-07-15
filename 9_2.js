function readUserInput(question) {
  const readline = require('readline').createInterface({
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


class Coordinate {
  x = 0.0;
  y = 0.0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

}

(async function main() {
  console.log('座標pを入力せよ');
  const a = await readUserInput('X座標:');
  x = Number(a);
  const b = await readUserInput('Y座標:');
  y = Number(b);

  var p = new Coordinate(x, y);
  console.log(`p = (${p.getX()},${p.getY()})`);
  var q = p
  console.log('pをqと同じ座標として作りました。');
  console.log(`q = (${q.getX()},${q.getY()})`);

  if (p == q) {
    console.log('pとqは等しいです。');
  } else {
    console.log('pとqは等しくありません');
  }

  var c1 = new Coordinate(0.0, 0.0);
  var c2 = new Coordinate(1.1, 2.2);
  console.log(`c1 = (${c1.getX()} ${c1.getY()})`);
  console.log(`c2 = (${c2.getX()} ${c2.getY()})`);

  var r = new Array(3).fill(0);

  for (var i = 0; i < r.length; i++) {
    r[i] = new Coordinate(0.0, 0.0);
  }


  for (var i = 0; i < r.lengt; i++) {
    console.log(`a[${i}] = ${r[i].getX()}`);
  }

  for (var i = 0; i < r.length; i++) {
    console.log(`a[${i}] = (${r[i].getX()} ${r[i].getY()})`);
  }
})();
