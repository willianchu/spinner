const spinning = (function(i) {
  setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100+i);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300+i);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500+i);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700+i);
  if (i > 10000) {
    return;
  } else {
    spinning(i+800);
  };
  console.log("\n");
});

spinning(1);
