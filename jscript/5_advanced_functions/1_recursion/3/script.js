function fib(num) {
    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}

alert(fib(1)); // 1
alert(fib(2)); // 1
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757