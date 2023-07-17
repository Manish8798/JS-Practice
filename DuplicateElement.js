const findDuplicate = (arr) => {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      return arr[i];
    }
  }
};
const arr = [2, 4, 6, 8, 2];
console.log(findDuplicate(arr));
