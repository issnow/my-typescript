"use strict";
(() => {
    // *抽象类做为其它派生类的基类使用-->被继承使用,它们一般不会直接被实例化
    // *abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。
    class Animal {
        constructor(theName) {
            this.name = theName;
        }
    }
    class Dog extends Animal {
        // *继承,利用super继承父类属性,自身可以添加额外属性
        constructor(theName, theAge) {
            super(theName); //*调用父类的构造函数
            this.age = theAge;
        }
        sayHi() {
            console.log('bow-wow');
        }
    }
    const d1 = new Dog('dog1', 12);
    console.log('d1', d1);
    d1.sayHi();
})();
