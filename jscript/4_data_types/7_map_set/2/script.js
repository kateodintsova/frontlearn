function aclean(arr) {
  let arrMap = new Map();

  for (let item of arr) {
    arrMap.set(item.toLowerCase().split('').sort().join(''), item);
  }

  return Array.from(arrMap.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));