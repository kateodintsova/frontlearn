let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop) {
    return target[target.length + +prop];
  }
});

alert(array[-1]); // 3
alert(array[-2]); // 2
