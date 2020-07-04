var hand = Math.round(Math.random() * 2);

process.stdout.write('コンピューターが作成した手: ');
switch (hand) {
  case 0:
    console.log('グー');
    break;
  case 1:
    console.log('チョキ');
    break;
  case 2:
    console.log('パー');
    break;
}