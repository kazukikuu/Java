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


function aryRmv(a, idx) {
  // a.splice(idx, 1);
  if (idx >= 0 && idx < a.length) {
    for (var i = idx; i < a.length - 1; i++) {
      a[i] = a[i + 1];
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
  aryRmv(a, idx);

  for (var i = 0; i < num; i++) {
    console.log(`a[${i}]= ${a[i]}`);
  }
})();