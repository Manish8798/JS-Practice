const countPalindromicSubstrings = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (str.charAt(i) == str.charAt(j)) {
        count++;
      } else break;
    }
  }

  return count;
};
// countPalindromicSubstrings('abcd') - Returns 4 (a, b, c, d)

const output = countPalindromicSubstrings("aaa");
console.log(output);
