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


function aryExchng(a, b) {
  if (a.length < b.length) {
    var n = a.length;
  } else {
    var n = b.length;
  }

  for (var i = 0; i < n; i++) {
    var t = a[i];
    a[i] = b[i];
    b[i] = t;
  }
};



(async function main() {
  var c = await readUserInput('配列aの要素数: ');
  var na = Number(c);
  var a = new Array(na).fill(0);

  for (var i = 0; i < na; i++) {
    var d = await readUserInput(`a[${i}]:`);
    a[i] = Number(d);
  }

  var d = await readUserInput('配列bの要素数: ');
  var nb = Number(d);
  var b = new Array(nb).fill(0);

  for (var i = 0; i < nb; i++) {
    var e = await readUserInput(`b[${i}]:`);
    b[i] = Number(e);
  }

  console.log('配列a,bの全要素を交換しました。');
  aryExchng(a, b);
  for (var i = 0; i < na; i++) {
    console.log(`a[${i}]= ${a[i]}`);
  }

  for (var i = 0; i < nb; i++) {
    console.log(`b[${i}]= ${b[i]}`);
  }


})();