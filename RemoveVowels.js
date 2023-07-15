const removeVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str.charAt(i))) {
      ans += str.charAt(i);
    }
  }
  console.log(ans);
};

removeVowels("Hello world");
