const moment = require('moment')
var counter = 0;
var x = 0;
var y = 0;
var day = moment('2020-07-12');
console.log(day.date());

class Point2D {
  constructor() {
    if (++counter == day) {
      console.log('当たり!');
      console.log(`今日${counter}目の座標が生成されました。`);
    }
  }

  getX() {
    return x;
  }

  getY() {
    return y;
  }

  countDay() {

  }


}


for (var i = 0; i < 40; i++) {
  p1 = new Point2D();
  if (day.date() == i) {
    console.log(`当たり!!今日${i}個目の座標が生成されました。`);
  } else {
    console.log(`${i}(${p1.getX()},${p1.getY()})`)
  }
}