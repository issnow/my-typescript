export{}
let str:string = 'hello'

function fn(this: Window) {
  console.log(this)
}

let a:number = 123
let o :{name: string,[propName:string]:any}

o = {name: 'guocheng', age:123}
console.log('o1', o)
