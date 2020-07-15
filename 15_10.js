

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
function printDouble(x, p, w) {
  console.log(x.toFixed(p));
}

function PrintStringArray1(a) {
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
      process.stdout.write(a[i].charAt(j));
    }
    console.log();
  }

}

// メイン処理
(async function main() {
  var s1 = await readUserInput('文字列の個数: ');
  var n = Number(s1);

  var sx = new Array(n).fill(0);

  for (var i = 0; i < sx.length; i++) {
    sx[i] = await readUserInput(`sx[${i}] = `);
  }
  PrintStringArray1(sx);
})();