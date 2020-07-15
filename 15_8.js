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
  var s1 = await readUserInput('文字列s1: ');
  var s2 = await readUserInput('文字列s2: ');

  var balance = s1.localeCompare(s2);

  if (balance < 0) {
    console.log('s1の方が小さい');
  } else if (balance > 0) {
    console.log('s2の方が小さい');
  } else {
    console.log('s1とs2は等しい');
  }

})();