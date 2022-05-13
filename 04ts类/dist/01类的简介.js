"use strict";
/**
 * *类 class
 * * 属性:
 * * 方法:
 */
class P {
    constructor() {
        // *实例属性-->通过实例直接访问
        this.name = 'wukong';
        this.age = 18;
        // *readonly 只读,不能改
        this.gender = 'male';
    }
    // *方法 如何加了static-->静态方法,不加-->实例方法
    sayHello() {
        console.log('hello');
    }
}
// * static -->静态属性,通过类访问
P.color = 'red';
const p1 = new P();
console.log('p1', p1);
console.log('P.color', P.color);
// p1.gender = 'femail' -->改不了
