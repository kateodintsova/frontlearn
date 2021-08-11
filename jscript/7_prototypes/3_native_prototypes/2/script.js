function f(a, b) {
    alert(a + b);
}

Function.prototype.defer = function (ms) {
    let func = this;
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
};

f.defer(5000)(1, 2);