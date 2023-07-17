const flattenArray = (arr) => {
  let flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(flattenArray(arr[i]));
    //   console.log(flattenedArray);
    } else {
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
};

const arr = [1, [2], [3, [[4]]]];

console.log(flattenArray(arr));
