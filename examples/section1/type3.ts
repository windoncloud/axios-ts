let x: [string, number] // 元组
x = ['hello', 10]
x[3] = 'world' // 报错，可查源码 (元组类型不该越界)