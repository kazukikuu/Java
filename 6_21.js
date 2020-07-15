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
  var ninzu = 0;
  a = await readUserInput(`クラス数 :`);
  classNum = Number(a);
  var point = new Array(classNum).fill(0);
  for (var i = 0; i < classNum; i++) {
    b = await readUserInput(`${i + 1}組の人数 :`);
    num = Number(b);
    point[i] = new Array(num).fill(0);
    ninzu += num;
    for (var j = 0; j < point[i].length; j++) {
      c = await readUserInput(`${i + 1}組${j + 1}の点数 :`);
      point[i][j] = Number(c);
    }
  }

  console.log(point);
  console.log(`人数${ninzu}`)



  console.log('組| 合計 平均');
  console.log('--------------');
  var total = 0;

  for (var i = 0; i < point.length; i++) {
    var sum = 0;
    for (var j = 0; j < point[i].length; j++) {
      sum += point[i][j];
    }
    total += sum;
    console.log(`${i + 1}組 |  ${sum}    ${Math.round(sum / point[i].length * 10) / 10} `);
    // console.log(point[i].length);
  }
  console.log('--------------');
  process.stdout.write(`計 | ${total}    ${total / ninzu} `);
  // console.log(`sum${sum}`)

})();
// await readUserInput(``);
//