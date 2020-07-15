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

function pow2(no) {
  var pw = 1;

  while (no-- > 0) {
    pw *= 2;
  }
  return pw;

}



(async function main() {

  var a = await readUserInput('x: ');
  var x = Number(a);
  var b = await readUserInput('n: ');
  var n = Number(b);

  var mPower = x * pow2(n);
  var c = x / pow2(n);
  var dPower = Math.floor(c);


  var lShift = x << n;
  var rShift = x >> n;

  console.log(`[a] x × (2の${n}乗) = ${mPower}`);
  console.log(`[b] x % (2の${n}乗) = ${dPower}`);

  console.log(`[c] x << ${n} = ${lShift}`);
  console.log(`[d] x << ${n} = ${rShift}`);

  process.stdout.write('[a]と[c]の値は一致');

  if (mPower === lShift) {
    console.log('します');
  } else {
    console.log('しません');
  }

  process.stdout.write('[b]と[d]の値は一致');

  if (dPower === rShift) {
    console.log('します');
  } else {
    console.log('しません');
  }




})();












  // var a = await readUserInput('');
  // process.stdout.write('です');