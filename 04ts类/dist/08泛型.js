"use strict";
/**
 * *在定义函数或者类时,如果遇到类型不明确时,可以使用泛型
 *
 */
// function fn(a:number):number{
//   return a
// }
function fn(a) {
    return a;
}
// *两种方式
let b = fn(19);
let c = fn('hello');
console.log('b, c', b, c);
// *多重泛型
function fn2(name, age) {
    console.log('age', age);
    return name;
}
fn2('guocheng', 12);
function fn3(o) {
    return o.length;
}
fn3('hello');
fn3([0, 1]);
class MyClass {
    constructor(theName) {
        this.name = theName;
    }
}
const mycl1 = new MyClass('wukong');
