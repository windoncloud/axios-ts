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