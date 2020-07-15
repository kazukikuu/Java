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


  function med3(a, b, c) {
    if (a >= b) {
      if (b >= c) {
        return b;
      } else if (a <= c) {
        return a;
      } else {
        return c;
      }
    } else if (a > c) {
      return a;
    } else if (b > c) {
      return c;
    } else {
      return b;
    }

  }

  var x = await readUserInput('整数a:');
  var a = Number(x);
  var y = await readUserInput('整数b:');
  var b = Number(y);
  var z = await readUserInput('整数c:');
  var c = Number(z);

  console.log(`中央値は${med3(a, b, c)}です。`);

})();