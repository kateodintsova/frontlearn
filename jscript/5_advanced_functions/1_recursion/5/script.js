function printList(list) {
    if (list.next) {
        printList(list.next);
    }

    alert(list.value);
}

function printListCycle(list) {
    let arr = [];
    let tmpList = list;

    while (tmpList) {
        arr.push(tmpList.value);
        tmpList = tmpList.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList(list);
printListCycle(list);