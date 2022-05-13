class Dog {
  name: string
  age: number
  // *构造函数在创建实例时自动调用
  // *这里的形参只是参数,不是实例的属性,上面定义的name才是实例属性  theName-->参数,name-->属性
  constructor(theName: string, theAge: number) {
    this.name = theName
    this.age = theAge
  }
  bark() {
    console.log('bow-wow')
  }
}


const d1 = new Dog('旺财', 3)
d1.bark()