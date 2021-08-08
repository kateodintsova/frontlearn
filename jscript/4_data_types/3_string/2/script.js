function checkSpam (str) {
    return !(str.toLowerCase().indexOf('viagra') == -1 && str.toUpperCase().indexOf('XXX') == -1)
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit'));