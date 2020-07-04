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
  const width = await readUserInput('widthの値 :');
  const height = await readUserInput('heightの値 : ');
  a = parseInt(width);
  b = parseInt(height);
  console.log(`面積は${(width * height / 2)}です。`);
})();