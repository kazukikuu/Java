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
// メイン処理
function putChars(c, n) {
  while (n-- > 0) {
    process.stdout.write(c);
  }
}


function putStars(n) {
  putChars('*', n);
}

(async function main() {

  console.log('左辺直角の三角形を表示します。');
  var a = await readUserInput('段数は:');
  var n = Number(a);

  for (var i = 1; i <= n; i++) {
    putStars(i);
    console.log();
  }



})();

  // var a = await readUserInput('');
  // process.stdout.write('です');