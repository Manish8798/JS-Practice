const longestWord = (str) => {
  let arr = str.split(" ");
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max.length < arr[i].length) {
      max = arr[i];
      // console.log(arr[i], max);
    }
  }
  return max;
};

// longestWord('My name is Vishwas') - Returns 'Vishwas'
const output = longestWord("Hello world");
console.log(output);
