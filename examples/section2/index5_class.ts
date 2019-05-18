interface ClockInterface { // 实例类型
    currentTime: Date

    setTime(d:Date)
}

interface ClockCOnstructor {
    new(hour:number, minute: number): ClockInterface
//  构造器签名
}

class Clock implements ClockInterface {
// class Index5_class implements ClockCOnstruc tor {
    currentTime: Date

    constructor(h:number,m:number){

    }

    setTime(d:Date) {
        this.currentTime = d
    }

}