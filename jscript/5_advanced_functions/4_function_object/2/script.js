function sum(a) {
    let tmpSum = a;

    function sumFunc(b) {
        tmpSum += b;
        return sumFunc;
    }

    sumFunc.toString = () => {
        return tmpSum;
    }

    return sumFunc;
}

alert(sum(1)(2)); // == 3; // 1 + 2
alert(sum(1)(2)(3)); //== 6; // 1 + 2 + 3
alert(sum(5)(-1)(2)); // == 6
alert(sum(6)(-1)(-2)(-3)); // == 0
alert(sum(0)(1)(2)(3)(4)(5)); // == 15