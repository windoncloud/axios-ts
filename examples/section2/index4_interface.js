// function printLabel(labelledObj: {label:string}){
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
var mySquare2 = createSquare({ colour: 'black', width: 100 });
var p1 = { x: 10, y: 10 };
// p1.x = 5 // not valid
var a = [1, 2, 3, 4];
var ro = a;
// rp.push()
// ro.length = 1
// a = ro
a = ro;
console.log('aaa', a);
