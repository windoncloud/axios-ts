let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24

let names: string = 'Kingsley'
let age: number = 25

let sentence = `names is ${names}`

let list: number[]=[1,2,3]
let listA: Array<number> = [1,2]

let x: [string, number]
x = ['hello', 10]

console.log(x[0].substr(1))
// console.log(x[1].substr(1))

enum Color {
    Red = 1,
    Green = 3,
    Blue
}
// let colorName: Color = Color.Green
let colorName: string = Color[4]
console.log(colorName)

