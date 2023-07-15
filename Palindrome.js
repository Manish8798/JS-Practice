const palindrome = (str) => {
  let j = str.length - 1;
  for (let i = 0; i <= str.length / 2; i++) {
    console.log(str.charAt(i), str.charAt(j), j);

    if (str.charAt(i) != str.charAt(j)) {
      console.log("Not Palindrome");
      return;
    }
    j = j - 1;
  }
  console.log("Palindrome");
  return;
};

palindrome("racecar");
