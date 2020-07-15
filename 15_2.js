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

  var s1 = 'ABC';
  var s2 = new String();
  var s3 = new String(c);
  var s4 = new String(c, 5, 3);
  var s5 = new String('XYZ');

  console.log('文字列');

  var s6 = await readUserInput('文字列: ');

  console.log('s1 =' + s1);
  console.log('s2 =' + s2);
  console.log('s3 =' + s3);
  console.log('s4 =' + s4);
  console.log('s5 =' + s5);
  console.log('s5 =' + s6);
})();
