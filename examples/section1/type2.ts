let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

function warnUser(): void { //  不返回任何值
    console.log('This i my waring message')
}

let unusable: void = null || undefined // 只能这两种

// let num: number = 3
// let num: number | null = 3
let num: number = 3
num = null // tsc type2.ts --strictNullChecks

function error(message: string): never {
    throw new Error(message)
}

function fail() {
    return error('something failed')
}

function infiniteLoop(): never {
    while (true) {

    }
}

declare function create(o: object | null): void;
create({pros:0})
create({pros:undefined})

let someValue: any = 'this is a string'
let strLength:number = (<string>someValue).length // 不然不能获取到长度
let strLength2:number = (someValue as string).length