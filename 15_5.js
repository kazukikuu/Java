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
  var s = await readUserInput('文字列s: ');
  for (var i = 0; i < s.length; i++) {
    console.log(`a[${i}] = ${s.charAt(i)}`);
    console.log(s[i].charCodeAt(0).toString(16));
  }
})();