(()=>{
  // *抽象类做为其它派生类的基类使用-->被继承使用,它们一般不会直接被实例化
  // *abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。
  abstract class Animal {
    name: string
    constructor(theName: string) {
      this.name = theName
    }
    // *可以添加抽象方法 子类继承的时候必须实现
    abstract sayHi():void;
  }

  class Dog extends Animal {
    age: number
    // *继承,利用super继承父类属性,自身可以添加额外属性
    constructor(theName:string,theAge: number) {
      super(theName)//*调用父类的构造函数
      this.age = theAge
    }

    sayHi(): void {
      console.log('bow-wow')
    }
  }

  const d1 = new Dog('dog1', 12)
  console.log('d1', d1)
  d1.sayHi()
})()