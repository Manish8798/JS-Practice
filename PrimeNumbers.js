const printPrimeNumbers = (min, max) => {
  for (let i = min; i <= max; i++) {
    let check = false;
    if (i < 2) continue;
    for (let j = 2; j < i / 2; j++) {
      if (i % j == 0) {
        check = true;
        break;
      }
    }
    if (!check) console.log(i);
  }
};

printPrimeNumbers(0, 20);
