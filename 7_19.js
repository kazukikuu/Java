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


function aryRmvN(a, idx, n) {

  // a.splice(idx, n);
  if (n > 0 && idx >= 0 && idx + n < a.length) {
    var idx2 = idx + n - 1;
    if (idx2 > a.length - n - 1) {
      idx2 = a.length - n - 1;
    }
    for (var i = idx; i <= idx2; i++) {
      a[i] = a[i + n];
    }
  }

};



(async function main() {
  var c = await readUserInput('要素数: ');
  var num = Number(c);
  var a = new Array(num).fill(0);

  for (var i = 0; i < num; i++) {
    var d = await readUserInput(`a[${i}]:`);
    a[i] = Number(d);
  }

  var e = await readUserInput('削除する要素のインデックス:');
  idx = Number(e);
  var f = await readUserInput('削除する要素の個数:');
  n = Number(f);
  aryRmvN(a, idx, n);

  for (var i = 0; i < num; i++) {
    console.log(`a[${i}]= ${a[i]}`);
  }
})();