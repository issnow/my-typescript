/**
 * *在定义函数或者类时,如果遇到类型不明确时,可以使用泛型
 * 
 */
// function fn(a:number):number{
//   return a
// }

function fn<T>(a:T):T {
  return a
}

// *两种方式
let b = fn(19)

let c = fn<string>('hello')
console.log('b, c', b, c)


// *多重泛型
function fn2<T,K>(name: T,age: K):T {
  console.log('age', age)
  return name
}

fn2<string, number>('guocheng', 12) 


// *继承  T extends Inter -->泛型T必须是Inter的实现类(子类)
interface Inter {
  length: number
}

function fn3<T extends Inter>(o:T):number {
  return o.length
}

fn3('hello')
fn3([0,1])

class MyClass<T> {
  name: T
  constructor(theName:T){
    this.name = theName
  }
}

const mycl1 = new MyClass<string>('wukong')