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

  var s1 = null;
  var s2 = '';
  var s3 = 'ABC';
  var s4 = 'ABC';
  var s5 = 'XYZ';

  console.log('文字列');

  console.log('文字列s1 =' + s1);
  console.log('文字列s2 =' + s2);
  console.log('文字列s3 =' + s3);
  console.log('文字列s4 =' + s4);
  console.log('文字列s5 =' + s5);


  console.log('s3とs4は同じ文字列リテラルを参照');
  if (s3 === s4) {
    console.log('している');
  } else {
    console.log('していない');
  }

})();