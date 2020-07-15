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


  function min(a, b, c) {
    var min = a;
    if (b < min) {
      min = b;
    }
    if (c < min) {
      min = c;
    }
    return min;
  }

  var x = await readUserInput('整数a:');
  var a = Number(x);
  var y = await readUserInput('整数b:');
  var b = Number(y);
  var z = await readUserInput('整数c:');
  var c = Number(z);

  console.log(`最小値は${min(a, b, c)}です`);

})();