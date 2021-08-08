function getSecondsToday() {
    let dateNow = new Date();
    let dateToday = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    return Math.round((dateNow - dateToday) / 1000);
}

alert(getSecondsToday());