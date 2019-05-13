interface SearchFunc { // 函数类型
    (source: string,subString:string):boolean
}

let mySearch: SearchFunc
// mySearch = function (src: string, sub:string): boolean {
mySearch = function (src, sub){
    let result = src.search(sub)
    return result > -1
}

interface StringArray {
    [index: number]: string
}

let myArray: StringArray

myArray = ['Bob', 'Fred']

let myStr:string = myArray['0']

class Animal {
    name: string
}

class Dog extends Animal {
    breed: string
}

interface NotOkay {
    // [x:number]: Animal // 数字类型不是字符串子类型
    [x:number]: Dog

    // [x:string]: Dog
    [x:string]: Animal
}

// interface NumberDictionary {
//     [index:string]:number
//     length:number
//     name:string
// }

interface ReadonlyStringArray {
    readonly [index:number]:string
}

let myArray2: ReadonlyStringArray = ['Alice', 'Bob']
// myArray2[2] = 'Mallory'