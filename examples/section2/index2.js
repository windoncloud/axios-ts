var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
function f(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f(false, 0);
f(true, 0);
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        // for (let i=0;i<currentRow.length;i++) { // 用var 不正常，用 let(屏蔽作用域) 可以，但不推荐
        for (var j = 0; j < currentRow.length; j++) { //
            // sum+=currentRow[i]
            sum += currentRow[j];
        }
    }
    return sum;
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(sumMatrix(matrix));
var _loop_1 = function (i) {
    // let每次会创建一个新的作用域，不用使用自（立即）执行函数
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
//let会计作用域获取
// for (var i=0; i<10;i++) {
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var numLivesForCat = 9;
var kitty = {
    name: 'Kitty',
    numLives: numLivesForCat
};
kitty.name = 'Jerry';
kitty.numLives--;
var input = [1, 2];
function ff(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
var _a = [1, 2, 3, 4], first = _a[0], reset = _a.slice(1);
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
var a = o.a, passThrough = __rest(o, ["a"]);
var total = passThrough.b + passThrough.c.length;
console.log('total', total);
