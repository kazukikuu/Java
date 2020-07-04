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
  var a = await readUserInput('変数a:');
  var b = await readUserInput('変数b:');
  var c = await readUserInput('変数c:');
  var t;
  if (a > b) {
    t = a;
    a = b;
    b = t;
  }
  if (b > c) {
    t = b;
    b = c;
    c = t;
  }
  if (a > b) {
    t = a;
    a = b;
    b = t;
  }

  console.log("a<b<cとなるようソートしました");
  console.log(`変数aは${a}です`);
  console.log(`変数bは${b}です`);
  console.log(`変数cは${c}です`);
})();