function f(condition, x) {
    if(condition) {
        let x =100
        return x
    }
    return x
}

f(false, 0)
f(true, 0)

function sumMatrix(matrix: number[][]) {
    let sum = 0
    for(let i=0;i<matrix.length;i++){
        let currentRow = matrix[i]
        // for (let i=0;i<currentRow.length;i++) { // 用var 不正常，用 let(屏蔽作用域) 可以，但不推荐
        for (let j=0;j<currentRow.length;j++) { //
            // sum+=currentRow[i]
            sum+=currentRow[j]
        }
    }
    return sum
}

let matrix = [
    [1,2,3],
    [4,5,6]
]

console.log(sumMatrix(matrix))

//let会计作用域获取

// for (var i=0; i<10;i++) {
for (let i=0; i<10;i++) {
    // let每次会创建一个新的作用域，不用使用自（立即）执行函数
    setTimeout(function () {
        console.log(i)
    },100*i)
}

const numLivesForCat = 9

const kitty = {
    name: 'Kitty',
    numLives: numLivesForCat
}

kitty.name = 'Jerry'
kitty.numLives--

let input:[number,number] = [1,2]

function ff([first, second]: [number,number]) {
    console.log(first)
    console.log(second)
}

let [first, ...reset] = [1,2,3,4]

let o = {
    a: 'foo',
    b: 12,
    c: 'bar'
}

let {a, ...passThrough} = o
let total = passThrough.b + passThrough.c.length
console.log('total', total)

let {a: newName1, b: newName2} = o
newName1 = o.a // let newName1 = o.a
newName2 = o.b // let newName2 = o.b
// let {a, b}:{a:string,b:number} = o

function keepWholeObject(wholeObject: {a: string, b?:number}){
    let {a, b = 1001} = wholeObject
}

type C = {a:string, b?:number}
// function fu({a,b}:C):void{
// function fu({a = '', b = 0}:C):void{
function fu({a, b = 0} = {a: ''}):void{
}

fu({a: 'yes'})
fu()
// fu({}) //要传a
// 解构尽量小而简单，便于理解