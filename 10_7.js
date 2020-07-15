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

class MinMax {
  min1(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  min2(a, b, c) {
    var min = a;
    if (b < min) {
      min = b;
    }
    if (c < min) {
      min = c;
    }
    return min;
  }

  min3(a) {
    var min = a[0];
    for (var i = 1; i < a.lenght; i++) {
      if (a[i] < min) {
        min = a[i];
      }
    }
    return min;
  }

  minIndexArray(a) {
    var min = a;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
      if (a[i] == min) {
        count++;
      }
    }
    var c = new Array(count--).fill(0);
    for (i = 0; i < a.length; i++) {
      if (a[i] == min) {
        c[count--] = i;
      }
    }
    return c;
  }

  max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  max(a, b, c) {
    var max = a[0];
    for (var i = 1; i < a.length; i++) {
      if (a[i] > max) {
        max = a[i];
      }
    }
    return max;
  }




  max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  max(a, b, c) {
    var max = a;
    if (b > max) {
      max = b;
    }
    if (c > max) {
      max = c;
    }
    return max;
  }

  max(a) {
    var max = a[0];
    for (var i = 1; i < a.lenght; i++) {
      if (a[i] > max) {
        max = a[i];
      }
    }
    return max;
  }

  maxIndexArray(a) {
    var max = max(a);
    var count = 0;
    for (var i = 0; i < a.lenght; i++) {
      if (a[i] === max) {
        count++;
      }
    }
    return c;
  }
}

(async function main() {
  var a1 = await readUserInput('xの値:');
  var x = Number(a1);
  var b = await readUserInput('yの値:');
  var y = Number(b);
  var c = await readUserInput('zの値:');
  var z = Number(c);

  var c = await readUserInput('配列aの要素数: ');
  var num = Number(c);
  var a = new Array(num).fill(0);

  for (var i = 0; i < num; i++) {
    var d = await readUserInput(`a[${i}]: `);
    a[i] = Number(d);
  }


  ka = new MinMax();



  console.log(ka.min3(a));
  console.log('x,yの最大値は' + ka.min2(x, y, z));


  var min_val = Math.min.apply(null, a);
  console.log('aの最小値:' + min_val);
  console.log('そのインデックスは' + a.indexOf(min_val) + a.lastIndexOf(min_val) + 'です');

  var max_val = Math.max.apply(null, a);
  console.log('aの最大値:' + max_val);
  console.log('そのインデックスは' + a.indexOf(max_val) + a.lastIndexOf(max_val) + 'です');







})();
