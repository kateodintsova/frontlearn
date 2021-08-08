function getMaxSubSum(arr) {
    let sumMax = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumPart = 0;
        for (let j = i; j < arr.length; j++) {
            sumPart += arr[j];
            sumMax = Math.max(sumMax, sumPart);
        }
    }

    return sumMax;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));