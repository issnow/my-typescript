export { }
// *object表示对象,一般不用
let a: object
a = {}
a = function () { }

// *用这种指定属性{key:type,key:type,key:type,key:type,}
let b: { name: string,age?:number };
b = { name: '123' }

// *[propName:string]:any 属性可以是任意类型
let c: {name:string,[propName:string]:any}
c= {name: '123',a:1,b:true}


// *函数的结构,表示参数是number,返回值也是number
let d :(a:number,b:number)=>number
d = (a,b)=>{
  return a+b
}

interface temp {
  a:string,
  b:string,
  [propName:string]:any
}
// *数组 
let e:temp[]
let f:number[]
let g:Array<number>
e = [
  {a:'123',b:'34',c:123}
]

// *元组-->就是固定长度的数组
let h:[string,number]
h = ['123',123]


// *枚举 enum,从0开始

enum Gender {
  male,
  female
}
let i :{name: string,gender:Gender}
i = {name:'悟空',gender: Gender.male}
console.log('res', i.gender === Gender.male)


// *&表示同时
let j:{name:string} & {age:number}
j = {name: '123', age: 123}

// *类型别名
type Mytype = 1|2|3|4
let k :Mytype
let l: Mytype