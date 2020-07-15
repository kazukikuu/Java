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
  var NINZU = 6;
  var point = new Array(2);
  for (let y = 0; y < 6; y++) {
    point[y] = new Array(2).fill(0);
  }

  var sumStudent = [];
  var sumSubject = new Array(2).fill(0);

  console.log(`${NINZU}人の国語・数学の点数を入力せよ。`);

  for (var i = 0; i < NINZU; i++) {
    a = await readUserInput(`${i + 1}番    国語: `);
    point[i][0] = Number(a);
    b = await readUserInput('    数学:');
    point[i][1] = Number(b);

    sumStudent[i] = point[i][0] + point[i][1];
    sumSubject[0] += point[i][0];
    sumSubject[1] += point[i][1];
  }


  console.log('No.   国語 数学 平均');
  // console.log(point)

  for (var i = 0; i < NINZU; i++) {
    console.log(`NO.${i + 1}   ${point[i][0]}    ${point[i][1]}   ${sumStudent[i] / 2} `);
  }

  console.log(`平均${Math.round(sumSubject[0] / NINZU)}   平均${Math.round(sumSubject[1] / NINZU)} `);



})();
// await readUserInput(``);
//