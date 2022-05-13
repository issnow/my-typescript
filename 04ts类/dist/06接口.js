"use strict";
(() => {
    const o = {
        name: 'guochegn',
        age: 19,
        sayHi() {
            console.log('a1');
        }
    };
    /**
     * *定义类时,可以用类实现一个接口,实现接口就是使类满足接口的要求
     */
    class MyClass {
        constructor(theName, theAge) {
            this.name = theName;
            this.age = theAge;
        }
        sayHi() {
            console.log('this.name', this.name);
        }
    }
})();
