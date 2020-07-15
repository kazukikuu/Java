var moment = require('moment');

dateT = ["日", "月", "火", "水", "木", "金", "土"];
var meiji = new Array(2)
meiji[0] = moment(new Date(1868, 9, 8));
meiji[1] = moment(new Date(1912, 7, 30));
console.log(`明治 = ${meiji[0].year()}年${meiji[0].month()}月${meiji[0].date()}日(${dateT[meiji[0].day()]}) ~
${meiji[1].year()}年${meiji[1].month()}月${meiji[1].date()}日(${dateT[meiji[1].day()]})`);

var taisho = new Array(2)
taisho[0] = moment(new Date(1912, 7, 30));
taisho[1] = moment(new Date(1926, 12, 25));
console.log(`大正 = ${taisho[0].year()}年${taisho[0].month()}月${taisho[0].date()}日(${dateT[taisho[0].day()]}) ~
${taisho[1].year()}年${taisho[1].month()}月${taisho[1].date()}日(${dateT[taisho[1].day()]})`);


var shouwa = new Array(2)
shouwa[0] = moment(new Date(1926, 12, 25));
shouwa[1] = moment(new Date(1989, 1, 18));
console.log(`昭和 = ${shouwa[0].year()}年${shouwa[0].month()}月${shouwa[0].date()}日(${dateT[shouwa[0].day()]}) ~
${shouwa[1].year()}年${shouwa[1].month()}月${shouwa[1].date()}日(${dateT[shouwa[1].day()]})`);


// console.log(`${day1.year()}年${day1.month()}月${day1.date()}日(${dateT[day1.day()]})`);
