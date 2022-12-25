---
title: OOP and Prototype
---

# 物件導向與原型鏈

## 物件導向在 ES6 和 ES5

ES6

```js
// class 語法有點像是 component 的概念
class Dog {
  // constructor 負責做初始化, 像 react 一樣可以接收參數
  constructor(name) {
    this.name = name;
  }
  // 可以自訂 function method
  sayHello() {
    console.log(this.name);
  }
  //setter, getter
  getName() {
    return this.name;
  }
}

let d = new Dog("apple");
console.log(d);
```

ES5，在閉包的時候有用過相同的概念

```js
//ES5 會每次宣告會多一個function
function Dog(name) {
  var myName = name;
  return {
    getName: function () {
      return myName;
    },
    sayHello: function () {
      console.log(myName);
    },
  };
}

var a = Dog("abc");
var b = Dog("bbb");
console.log(a.sayHello === b.sayHello);
```
