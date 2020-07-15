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




function minOf(a) {

  var min = a[0];
  for (var i = 1; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
  }
  return min;
};



(async function main() {
  var c = await readUserInput('人数は: ');
  var ninzu = Number(c);

  var height = new Array(ninzu).fill(0);
  var weight = new Array(ninzu).fill(0);

  console.log(`${ninzu}人の身長と体重を入力せよ。`);

  for (var i = 0; i < ninzu; i++) {
    var d = await readUserInput(`${i + 1}番目の身長: `);
    height[i] = Number(d);
    var e = await readUserInput(`${i + 1}番目の身長: `);
    weight[i] = Number(e);
  }
  console.log(`最も背が低い人の身長:${minOf(height)}cm`);
  console.log(`最も痩せている人の体重:${minOf(weight)}kg`);
})();