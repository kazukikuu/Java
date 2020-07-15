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


function arrayClone(a) {
  var c = new Array(a.length).fill(0);
  for (var i = 0; i < c.length; i++) {
    c[i] = a[i];
  }
  return c;
};



(async function main() {
  var c = await readUserInput('要素数: ');
  var num = Number(c);
  var x = new Array(num).fill(0);

  for (var i = 0; i < num; i++) {
    var d = await readUserInput(`a[${i}]:`);
    x[i] = Number(d);
  }




  console.log('配列xの複製yを作りました。');

  var y = arrayClone(x);
  for (var i = 0; i < num; i++) {
    console.log(`y[${i}]= ${y[i]}`);
  }


})();