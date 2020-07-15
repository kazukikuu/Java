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

function min1(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min2(a, b, c) {
  var min = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  return min;
}

function min3(a) {
  var min = a[0];
  for (var i = 1; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
  }
  return min;
}



(async function main() {

  var d = await readUserInput('xの値');
  var x = Number(d);
  var e = await readUserInput('yの値');
  var y = Number(e);
  var f = await readUserInput('zの値');
  var z = Number(f);

  var c = await readUserInput('配列aの要素数: ');
  var num = Number(c);
  var a = new Array(num).fill(0);

  for (var i = 0; i < num; i++) {
    var d = await readUserInput(`a[${i}]:`);
    a[i] = Number(d);
  }
  console.log(a);

  console.log(`x,yの最小値は${min1(x, y)}です。`);
  console.log(`x,y,zの最小値は${min2(x, y, z)}です。`);
  console.log(`配列aの最小値は${min3(a)}です。`);
})();