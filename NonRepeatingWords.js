const nonRepeatingWords = (str1, str2) => {
    let arr1 = str1.split(" ");
    let arr2 = str2.split(" ");
    let arr = arr1.concat(arr2);
    let temp = arr1.concat(arr2);

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length-1; j++) {
            if(arr[i] == arr[j]) {
                temp.splice(j, 1);
                temp.splice(i, 1);
            }
        }
    }

    return temp;
}
let str1 = 'Hello Hello';
let str2 = 'Welcome Vishwas';
console.log(nonRepeatingWords(str1, str2))