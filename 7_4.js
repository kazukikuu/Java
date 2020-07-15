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
(async function main() {


  function sumUp(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

  do {
    var a = await readUserInput('xの値:');
    var x = Number(a);
  } while (x <= 0);

  console.log(`1から${x}までの和は${sumUp(x)}です。`);

})();