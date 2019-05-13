var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var first = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(first, second, [5]);
// 浅拷贝
console.log(bothPlus);
var defaults = {
    food: 'spicy',
    price: '10',
    ambiance: 'noisy'
};
var search = __assign({}, defaults, { food: 'rich' });
console.log(search);
var search2 = __assign({ food: 'rich' }, defaults);
console.log(search2);
