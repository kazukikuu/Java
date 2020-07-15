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


function addMatrix(x, y, z) {
  if (x.length != y.length || y.length != z.length) {
    return false;
  }
  for (var i = 0; i < x.length; i++) {
    if (x[i].length != y[i].length || y[i].length != z[i].length) {
      return false;
    }
  }

  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < x[i].length; j++) {
      z[i][j] = x[i][j] + y[i][j];
    }
  }
  return true;
};


function printMatrix(m) {
  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {
      process.stdout.write(`${m[i][j]}  `);
    }
    console.log();
  }
};


(function main() {
  var a = [[1, 2, 3], [4, 5, 6]];
  var b = [[6, 3, 4], [5, 1, 2]];
  var c = new Array(2);
  for (let y = 0; y < 2; y++) {
    c[y] = new Array(3).fill(0);
  }
  console.log(c);

  if (addMatrix(a, b, c)) {
    console.log('行列a');
    printMatrix(a);
    console.log('行列b');
    printMatrix(b);
    console.log('行列c');
    printMatrix(c);
  }


})();