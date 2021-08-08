// function printNumbers(from, to) {
//     let currentValue = from;

//     let timerId = setInterval(() => {

//         alert(currentValue);
//         if (currentValue == to) {
//             clearInterval(timerId);
//         }
//         currentValue++;
//     }, 1000);    
// }

function printNumbers(from, to) {
    let currentValue = from;

    let timerId = setTimeout(function tick() {
        alert(currentValue);
        if (currentValue != to) {
            currentValue++;
            timerId = setTimeout(tick, 1000);
        }
    }, 1000);
}



printNumbers(1, 3);