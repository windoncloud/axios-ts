var decLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
var names = 'Kingsley';
var age = 25;
var sentence = "names is " + names;
var list = [1, 2, 3];
var listA = [1, 2];
var x;
x = ['hello', 10];
console.log(x[0].substr(1));
// console.log(x[1].substr(1))
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
// let colorName: Color = Color.Green
var colorName = Color[4];
console.log(colorName);
