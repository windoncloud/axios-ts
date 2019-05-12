var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
function warnUser() {
    console.log('This i my waring message');
}
var unusable = null || undefined; // 只能这两种
// let num: number = 3
// let num: number | null = 3
var num = 3;
num = null; // tsc type2.ts --strictNullChecks
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('something failed');
}
function infiniteLoop() {
    while (true) {
    }
}
create({ pros: 0 });
create({ pros: undefined });
