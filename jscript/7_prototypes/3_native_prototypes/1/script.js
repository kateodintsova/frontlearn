function f() {
    alert("Hello!");
}

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

f.defer(5000); // выведет "Hello!" через 1 секунду