/*
 * @Author: fucheng
 * @Date: 2021-10-19 11:25:57
 * @LastEditTime: 2021-10-29 17:52:10
 * @LastEditors: fucheng
 * @Description: 变量声明
 */

// *number类型 
// let a:number = 1
// a = 'string' // Type 'string' is not assignable to type 'number'.

// *boolean类型
// let c = false // 如果声明赋值同时进行,ts自动类型预定义
// c = true// 可以
// c = 123 // 报错

// function fn(a:number,b:number):number {
//   return a+b
// }

// let res = fn(123,456)

// *类型断言 a as string,<string>a

// *函数返回值 void为空
// function fn():void {
// }

// *不会返回结果
// function fn():never{
//   throw new Error('err')
// }

// *对象  ?表示可选
// let a:{name:string, age?:number}
// a = {name:'孙悟空', age:12}

// *存在name属性和其他任意类型属性
// let c: {name:string,[propName:string]:any}
// c = {name:'猪八戒',age:18,gender:'男'}

// *function类型  使用类似于箭头函数的形式,声明函数结构的参数和返回值
// let fn:(a:number,b:string)=>boolean

// fn = (n1:number,n2:string)=>true
// fn(123,'hello')

// *array类型 ,声明
// let arr:number[]
// arr = [1,2,3,4,5]

// let array :Array<number>

// *元组,就是固定长度的数组,不能多,不能少,类型一致
// let h:[string,string]
// h = ['hello', 'world']

// *枚举 enum
// enum Gender{
//   Male,
//   Female
// }
// let i :{name:string,gender:Gender}
// i = {
//   name:'孙悟空',
//   gender:Gender.Male
// }
// console.log(i.gender === Gender.Male)

// *类型别名
// type myType = 1|2|3|4|5
// let k: myType
// let l: myType
// k = 4
// k = 9//报错