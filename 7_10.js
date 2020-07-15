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

async function confirmRetry() {
  do {

    var a = await readUserInput('もう一度？<yes...1/No...0> :');
    var cont = Number(a);
  } while (cont != 0 && cont != 1);
  return cont == 1;
};

(async function main() {
  console.log('暗記力トレーニング!!');
  do {
    var x = Math.floor(Math.random() * (900 - 100) + 100);
    var y = Math.floor(Math.random() * (900 - 100) + 100);
    var z = Math.floor(Math.random() * (900 - 100) + 100);
    var pattern = Math.random() * (1 - 4) + 4;

    var kotae;

    switch (pattern) {
      case 0:
        kotae = x + y + z;
        break;
      case 1:
        kotae = x + y - z;
        break;
      case 2:
        kotae = x - y + z;
        break;
      default:
        kotae = x - y - z;
        break;
    }
    console.log(`テスト用答え${kotae}`);

    while (true) {
      if (pattern == 0) {

        var b = await readUserInput(`${x} + ${y} + ${z} =`);
        var k = Number(b);
      } else if (pattern == 1) {
        var b = await readUserInput(`${x} + ${y} - ${z} = `);
        var k = Number(b);
      } else if (pattern == 2) {
        var b = await readUserInput(`${x} - ${y} + ${z} = `);
        var k = Number(b);
      } else {
        var b = await readUserInput(`${x} - ${y} - ${z} = `);
        var k = Number(b);
      }

      if (k === kotae) {
        break;
      }

      console.log('違います');
    }
  } while (await confirmRetry());

})();
