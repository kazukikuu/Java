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


function arrayInsOf(a, idx, x) {
  if (x < 0 || idx < 0 || idx > a.length) {
    return a.clone();
  } else {
    var c = new Array(a.length + 1).fill(0);
    var i = 0;
    for (; i < idx; i++) {
      c[i] = a[i];
    }
    for (; i < a.length; i++) {
      c[i + 1] = a[i];
    }
    c[idx] = x;
    return c;
  }

};


(async function main() {
  var c = await readUserInput('要素数: ');
  var num = Number(c);
  var x = new Array(num).fill(0);

  for (var i = 0; i < num; i++) {
    var d = await readUserInput(`x[${i}]:`);
    x[i] = Number(d);
  }

  var e = await readUserInput(`挿入するインデックス:`);
  var idx = Number(e);
  var f = await readUserInput(`挿入する値:`);
  var n = Number(f);

  y = arrayInsOf(x, idx, n);
  for (var i = 0; i < y.length; i++) {
    console.log(`y[${i}] = ${y[i]}`);
  }



})();