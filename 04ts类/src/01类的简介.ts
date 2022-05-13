/**
 * *类 class
 * * 属性:
 * * 方法:
 */

class P {
  // *实例属性-->通过实例直接访问
  name: string = 'wukong'
  age: number = 18
  // * static -->静态属性,通过类访问
  static color: string= 'red'

  // *readonly 只读,不能改
  readonly gender: string = 'male'

  // *方法 如何加了static-->静态方法,不加-->实例方法
  sayHello() {
    console.log('hello')
  }
}

const p1 = new P() 
console.log('p1', p1)
console.log('P.color', P.color)

// p1.gender = 'femail' -->改不了