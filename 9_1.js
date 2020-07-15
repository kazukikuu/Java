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
  x;
  y;
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
  const a = await readUserInput('X座標:');
  x = Number(a);
  const b = await readUserInput('Y座標:');
  y = Number(b);

  var p = new Coordinate(x, y);
  console.log(`p = (${p.getX()} ${p.getY()})`);
  var q = p;

  q.set(9.9, 9.9);
  console.log(`p = (${p.getX()} ${p.getY()})`);
  console.log(`q = (${q.getX()} ${q.getY()})`);
})();
