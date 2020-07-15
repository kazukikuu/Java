function readUserInput(question) {
  var readline = require('readline').createInterface({
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

function absolute(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}






(async function main() {

  var u = await readUserInput('int型の値');
  var a = Number(u);
  var e = await readUserInput('long型の値');
  var b = Number(e);
  var f = await readUserInput('float型の値');
  var c = Number(f);
  var g = await readUserInput('double型の値');
  var d = Number(g);

  console.log(`aの絶対値は${absolute(a)}です。`);
  console.log(`bの絶対値は${absolute(b)}です。`);
  console.log(`cの絶対値は${absolute(c)}です。`);
  console.log(`dの絶対値は${absolute(d)}です。`);
})();