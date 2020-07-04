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
  const point = await readUserInput('点数:');
  if (point >= 0 && point <= 59) {
    console.log('不可');
  } else if (point >= 60 && point <= 69) {
    console.log('可');
  } else if (point >= 70 && point <= 79) {
    console.log('良');
  } else if (point >= 80 && point <= 100) {
    console.log('優')
  }
  else {
    console.log('不正な点数です。');
  }
})();