(()=>{

  /**
   * *public-->公有,自由的访问类定义的属性
   * *private-->私有,不能在声明它的类的外部访问,通过在类中定义方法,间接获取私有属性
   * *protected-->protected成员在派生类中仍然可以访问
   */
  class People {
    private _name: string
    public _age: number
    constructor(a:string,b:number) {
      this._name = a
      this._age = b
    }
    
    // get函数
    get name():string {
      return this._name
    }
    
    // set函数
    set name(v:string) {
      // 可以加逻辑
      this._name = v
    }
  }

  const p1 = new People('悟空',12)

  console.log('p1.name', p1.name)
  p1.name = '八戒'
  console.log('p1.name', p1.name)


  class A {
    protected age: number
    constructor(theAge:number) {
      this.age = theAge
    }
  }

  class B extends A {
    test() {
      console.log('this.age', this.age)
    }
  }

  const b = new B(12)
  // console.log('b.age', b.age)//*无法访问

})()