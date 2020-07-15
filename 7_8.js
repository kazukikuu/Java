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

function random(a, b) {
  if (b <= a) {
    return a;
  } else {
    return Math.floor(Math.random() * (a - b + 1)) + b;
  }
}


(async function main() {

  var c = await readUserInput('下限値');
  var min = Number(c);
  var d = await readUserInput('上限値');
  var max = Number(d);

  console.log(`生成した乱数は${random(min, max)}です。`);


})();

  // var a = await readUserInput('');
  // process.stdout.write('です');