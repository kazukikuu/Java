for (var i = 0; i < process.argv.length; ++i) {
  process.stdout.write(`args[${i}]=`);
  for (var j = 0; j < process.argv[i].length; j++) {
    process.stdout.write(process.argv[i].charAt(j));
  }
  console.log();
}
