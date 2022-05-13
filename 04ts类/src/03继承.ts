(function(){
  class Animal {
    name: string
    age: number
    constructor(theName:string,theAge:number) {
      this.name = theName
      this.age = theAge
    }
    sayHello() {
      console.log('叫声')
    }
  }
  // *继承 extends
  class Dog extends Animal {

  }

  const d1 = new Dog('旺财', 12)
  d1.sayHello()


  class Cat extends Animal {
    sayHello(): void {
      console.log('miaomiaomao')
    }
  }

  const c1 = new Cat('猫咪', 3)
  c1.sayHello()







})()