function sumTo (num){
    return num === 1 ? 1 : num + sumTo(num - 1);
}

alert(sumTo(1)); // 1
alert(sumTo(2)); // 3
alert(sumTo(3)); // 6
alert(sumTo(4)); // 10
alert(sumTo(100)); // 5050