"use strict";
(() => {
    class Animal {
        constructor(theName) {
            this.name = theName;
        }
        sayHi() {
            console.log('hi');
        }
    }
    class Dog extends Animal {
        // *继承,利用super继承父类属性,自身可以添加额外属性
        constructor(theName, theAge) {
            super(theName); //*调用父类的构造函数
            this.age = theAge;
        }
        // *super表示父类
        sayHi() {
            super.sayHi();
        }
    }
    const d1 = new Dog('dog1', 12);
    console.log('d1', d1);
    d1.sayHi();
})();
