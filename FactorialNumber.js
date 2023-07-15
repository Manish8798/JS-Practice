const factorial = (n) => {
    let v = 1;
    for(let i = 1; i <= n; i++){
        v *= i;
        // console.log(v);
    }
    return v;
}

const output = factorial(4);
console.log(output);