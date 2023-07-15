const isAnagram = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let len = str1.length;
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (arr1[i] == arr2[i]) {
      count++;
    } else break;
  }
  if (count == len) return true;
  else return false;
};

console.log(isAnagram("racecarr", "carrrace"));
