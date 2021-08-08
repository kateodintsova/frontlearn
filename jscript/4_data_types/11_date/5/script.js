function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
}

alert(getLastDayOfMonth(2012, 1));
alert(getLastDayOfMonth(2021, 7));