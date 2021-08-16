function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve("result"), ms)
    });
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));