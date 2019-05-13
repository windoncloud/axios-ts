interface LabelledValue {
    label: string
}

// function printLabel(labelledObj: {label:string}){
function printLabel(labelledObj: LabelledValue){
    console.log(labelledObj.label)
}

let myObj = {size:10, label: 'Size 10 Object'}
printLabel(myObj)

interface Square {
    color: string
    area:number
}

interface SquareConfig {
    color?: string
    width?: number
    [propName:string]: any
}

function createSquare(config: SquareConfig): Square {
    let newSquare = {color: 'white', area: 100}
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({color:'black'})
let mySquare2 = createSquare({colour:'black', width:100} as SquareConfig)

let squareOptions = {colour:'black', width:100} // 就不会额外检查了
let mySquare3 = createSquare(squareOptions)

// 只读属性
interface Point {
    readonly x:number
    readonly y:number
}

let p1: Point = {x: 10, y: 10}
// p1.x = 5 // not valid

let a:number[] =[1,2,3,4]
let ro: ReadonlyArray<number> = a
// rp.push()
// ro.length = 1
// a = ro
a = ro as number[]
console.log('aaa', a)
