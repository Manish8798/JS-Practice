const printFibo = (n) => {
  if (n == 1) return 0;
  let a = 0;
  let b = 1;
  let val = 0;
  for (let i = 0; i < n; i++) {
    val = a + b;
    console.log(a);
    a = b;
    b = val;
  }
};

printFibo(7);
