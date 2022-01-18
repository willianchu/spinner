const spinning = function() {

  const spinningArray = [ '|', '/', '-', '\\' ];

  for (let element in spinningArray) {
    setTimeout(() => {
      process.stdout.write(`\r${spinningArray[element]}  `);
    }, element * 100);
  }
};



spinning();
