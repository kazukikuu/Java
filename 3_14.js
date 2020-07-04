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
  const a = await readUserInput('変数a:');
  const b = await readUserInput('変数b:');
  if (a >= b) {
    diff = a - b;
  } else {
    diff = b - a;
  }

  if (diff <= 10) {
    console.log('それらの差は10以下です');
  } else {
    console.log('それらの差は11以上です');
  }

})();