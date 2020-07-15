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




function sumOf(a) {

  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};



(async function main() {
  var c = await readUserInput('要素数: ');
  var num = Number(c);
  var x = new Array(num).fill(0);

  for (var i = 0; i < num; i++) {
    d = await readUserInput(`x[${i}]:`);
    x[i] = Number(d);
  }
  console.log(`全要素の合計は${sumOf(x)}です。`);

})();












  // var a = await readUserInput('');
  // process.stdout.write('です');