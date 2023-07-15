const reverseWord = (str) => {
  arr = str.split(" ");

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]) console.log(arr[i]);
  }
};

reverseWord(" This is  a  test string ");
