export {}
let bc: 'a' | 'b'

let d: boolean | string

// *any任意类型,别用,声明不指定类型也是any
let e: any
e = 10
e = 'hello'
e = false

// *unknown是一个安全的any
let f:unknown
f = 'he'
f = true

let s:string
// *类型断言 用来告诉解析器变量的实际类型,两种写法
s = f as string
s = <string> f

// *void 用来表示空,没有类型,不能有返回值
function sum(a:number,b:number):void {
  
}
// *never表示永远不会返回结果
function fn():never{
  throw new Error('asdfa')
}