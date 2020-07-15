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

async function readPlusInt() {
  do {
    var c = await readUserInput('正の整数値: ');
    var x = Number(c);
  } while (x <= 0);
  // console.log(x);
  return x;
};


(async function main() {
  do {
    var a = await readPlusInt();
    n = parseInt(a);

    console.log('逆から読むと');
    while (parseInt(n) > 0) {
      console.log(`${parseInt(n % 10)}`);
      n /= 10;
    }


    console.log('です。');

    do {
      var d = await readUserInput('もう一度？ Yes..1/No...0 : ');
      var y = Number(d);
    } while (y != 0 && y != 1);
  } while (y === 1);
})();







  // var a = await readUserInput('');
  // process.stdout.write('です');