const sumOfNum = (arr) => {
  let totalSum = 0;
  if (arr[1] > arr[0]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      totalSum += i;
    }
  } else {
    for (let i = arr[1]; i <= arr[0]; i++) {
      totalSum += i;
      // console.log(i);
    }
  }

  return totalSum;
};

const arr = [4, 1];
const output = sumOfNum(arr);
console.log(output);
