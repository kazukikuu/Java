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
  const a = await readUserInput('人数: ');
  var ninzu = Number(a);
  var tensu = [];
  var sum = 0;

  // console.log(`a[${i}] = ${a[i]}`);

  for (var i = 0; i < ninzu; i++) {
    var b = await readUserInput('');
    tensu[i] = Number(b);
    console.log(`${i + 1}番の点数: ${tensu[i]}`);
    sum += tensu[i];
  }

  var max = tensu[0];
  var min = tensu[0];
  for (var i = 1; i < ninzu; i++) {
    if (tensu[i] > max) max = tensu[i];
    if (tensu[i] < min) min = tensu[i];
  }
  console.log(`合計点は${sum}点です。`);
  console.log(`平均点はは${sum / ninzu}点です。`);
  console.log(`最高点はは${max}点です。`);
  console.log(`最低点はは${min}点です。`);


})();