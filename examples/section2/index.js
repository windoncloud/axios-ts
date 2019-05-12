function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
g();
function f2(shouldInitialize) {
    // var x // var 变量提前
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
f2(true);
f2(false);
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        // for(var i=0; i < currentRow.length; i++){ // wrong
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
var matrix = [[1, 2, 3], [4, 5, 6]];
console.log(sumMatrix(matrix));
for (var i = 0; i < 10; i++) {
    // setTimeout(function () {
    //     console.log(i)
    // }, 1000 * i)
    // 异步执行全是10，解决方案立即执行函数 , 闭包
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 100 * j);
    })(i);
}
