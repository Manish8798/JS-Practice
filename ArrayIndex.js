const createArray = (nums, indexs) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.splice(indexs[i], 0, nums[i]);
  }
  console.log(arr);
};
const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];
createArray(nums, index);
