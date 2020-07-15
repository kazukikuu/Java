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




function linearSearch(a, key) {

  for (var i = a.length - 1; i >= 0; i--) {
    if (a[i] == key) {
      return i;
    }
    return -1;
  }
};



(async function main() {
  var c = await readUserInput('要素数: ');
  var num = Number(c);
  var x = new Array(num).fill(0);

  for (var i = 0; i < num; i++) {
    e = await readUserInput(`x[${i}]:`);
    x[i] = Number(e);
  }
  d = await readUserInput('探す値');
  ky = Number(d);

  var idxTop = x.indexOf(ky);
  var idxBtm = x.indexOf(ky);

  if (idxTop === -1) {
    console.log('その要素は存在しません');
  } else if (idxTop === idxBtm) {
    console.log(`その値はx[${idxTop}]にあります`);
  } else {
    console.log('その値の要素は複数存在します。');
    console.log(`最も先頭のものはx[${idxTop}]にあります`);
    console.log(`最も末尾のものはx[${idxBtm}]にあります`);
  }

})();