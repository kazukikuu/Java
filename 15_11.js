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
var rand;
class ComputerPlayer {

  nextHand() {
    rand = Math.floor(Math.random() * (3 - 0)) + 0;
    return rand;
  }

}



// メイン処理
(async function main() {

  do {



    var hands = ['グー', 'チョキ', 'パー'];

    do {
      var s1 = await readUserInput('じゃんけんポン!! 0..グー/1..チョキ/2..パー:');
      var hand = Number(s1);
    } while (hand < 0 || hand > 2);




    var user = hand;
    var cp1 = new ComputerPlayer();
    var cp2 = new ComputerPlayer();


    var cp1_hand = cp1.nextHand();
    var cp2_hand = cp2.nextHand();

    console.log(`コンピューター1は${hands[cp1_hand]}でコンピューター2は${hands[cp2_hand]}であなたは${hands[user]}です。`);


    var r1 = (user - cp1_hand + 3) % 3;
    var r2 = (user - cp2_hand + 3) % 3;

    // console.log(r1);
    // console.log(r2);
    if (r1 == 2 && r2 == 2) {
      console.log('あなたの勝ちです');
    } else if (r1 == 1 && r2 == 0) {
      console.log('コンピューター1の勝ちです。');
    } else if (r1 == 0 && r2 == 1) {
      console.log('コンピューター2の勝ちです。');
    } else if (r1 == 0 && r2 == 2) {
      console.log('あなたとコンピューター１の勝ちです。');
    } else if (r1 == 2 && r2 == 0) {
      console.log('あなたとコンピューター2の勝ちです。');
    } else if (r1 == 1 && r2 == 1) {
      console.log('コンピューター1と2の勝ちです。');
    } else {
      console.log('引き分けです');
    }
    do {
      var r = await readUserInput('もう一度? 0..いいえ/1..はい:');
      var retry = Number(r);
    } while (retry != 0 && retry != 1);

  } while (retry == 1);

})();