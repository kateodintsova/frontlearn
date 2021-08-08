function factorial (num){
    return num === 1 ? 1 : num * factorial(num - 1);
}

alert(factorial(1)); // 1
alert(factorial(2)); // 2
alert(factorial(3)); // 6
alert(factorial(4)); // 24
alert(factorial(5)); // 120