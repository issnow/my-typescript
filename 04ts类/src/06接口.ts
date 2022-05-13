(()=>{


  // *定义类的结构,所有的属性都不能有实际的值,只能定义结构
  interface Type {
    name: string
    age: number
    sayHi():void
    // run(a:number):void

  }

  const o:Type = {
    name: 'guochegn',
    age: 19,
    sayHi() {
      console.log('a1')
    }
  }

  /**
   * *定义类时,可以用类实现一个接口,实现接口就是使类满足接口的要求
   */

  class MyClass implements Type {
    name: string
    age: number
    constructor(theName:string,theAge:number) {
      this.name = theName
      this.age = theAge
    }
    sayHi(): void {
      console.log('this.name', this.name)
    }

  }




})()