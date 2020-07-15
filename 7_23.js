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


function arraySrchIdx(a, x) {
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == x) {
      count++;
    }
  }

  var c = new Array(count--).fill(0);
  for (var i = a.length - 1; count >= 0; i--) {
    if (a[i] === x) {
      c[count--] = i;
    }
  }
  return c;
};



(async function main() {
  var c = await readUserInput('要素数: ');
  var num = Number(c);
  var x = new Array(num).fill(0);

  for (var i = 0; i < num; i++) {
    var d = await readUserInput(`x[${i}]:`);
    x[i] = Number(d);
  }



  var e = await readUserInput(`探知する値:`);
  var n = Number(e);
  var b = arraySrchIdx(x, n);


  if (b.length == 0) {
    console.log('一致する要素がありません');
  } else {
    console.log('一致する要素のインデックス');
    for (var i = 0; i < b.length; i++) {
      console.log(b[i]);
    }
  }


})();