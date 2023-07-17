const union = (arr1, arr2) => {
  let res = [];
  res = [...arr1, ...arr2];

  console.log(res);
};

const intersection = (arr1, arr2) => {
  let res = [];
  arr2.some((val) => {
    // console.log('arr2', val);
    if (arr1.includes(val)) {
      res.push(val);
    }
  });

  console.log(res);
};

const differenceOfArr = (arr1, arr2) => {
  let res = [];
  arr1.some((val) => {
    // console.log('arr2', val);
    if (!arr2.includes(val)) {
      res.push(val);
    }
  });

  console.log(res);
};

const symmetricDifference = (arr1, arr2) => {
  let maxLen = Math.max(arr1.length, arr2.length);
  let res = [];
  for (let i = 0; i < maxLen; i++) {
    if (arr1.length == maxLen && !arr2.includes(arr1[i])) {
      res.push(arr1[i]);
    } else if (!arr1.includes(arr2[i])) {
      res.push(arr2[i]);
    }
  }

  console.log(res);
};

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

const operations = (arr1, arr2) => {
  union(arr1, arr2);
  intersection(arr1, arr2);
  differenceOfArr(arr1, arr2);
  differenceOfArr(arr2, arr1);
  symmetricDifference(arr1, arr2);
};

operations(arr1, arr2);
