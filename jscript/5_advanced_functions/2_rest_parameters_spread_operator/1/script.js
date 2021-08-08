function showName(firstName, lastName, ...titles) {
    alert(firstName + ' ' + lastName); // Юлий Цезарь

    // Оставшиеся параметры пойдут в массив
    // titles = ["Консул", "Император"]
    alert(titles[0]); // Консул
    alert(titles[1]); // Император
    alert(titles.length); // 2
}

showName("Юлий", "Цезарь", "Консул", "Император");

function showNameArg() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);

    // Объект arguments можно перебирать
    // for (let arg of arguments) alert(arg);
}

// Вывод: 2, Юлий, Цезарь
showNameArg("Юлий", "Цезарь");

// Вывод: 1, Илья, undefined (второго аргумента нет)
showNameArg("Илья");


let arr = [3, 5, 1];

alert(Math.max(...arr)); // 5 (оператор "раскрывает" массив в список аргументов)