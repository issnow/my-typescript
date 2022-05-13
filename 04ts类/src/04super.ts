(()=>{
  class Animal {
    name: string
    constructor(theName: string) {
      this.name = theName
    }
    sayHi() {
      console.log('hi')
    }
  }

  class Dog extends Animal {
    age: number
    // *继承,利用super继承父类属性,自身可以添加额外属性
    constructor(theName:string,theAge: number) {
      super(theName)//*调用父类的构造函数
      this.age = theAge
    }

    // *super表示父类
    sayHi(): void {
      super.sayHi()
    }
  }

  const d1 = new Dog('dog1', 12)
  console.log('d1', d1)
  d1.sayHi()
})()