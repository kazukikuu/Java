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
  var c = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  console.log(c);
  var s = await readUserInput('文字列: ');
  console.log('逆から読むと');
  for (var i = s.length - 1; i >= 0; i--) {
    console.log(s.charAt(i));
  }
  console.log('です。');
})();