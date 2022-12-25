---
title: this
---

# This 的意義

### 各種情況下 this 的預設值

- **OOP(物件導向)、obj** `指向 class 或 obj 本身`
- **Function** `指向 window, global(strict模式下 → undefined)`
- **Arrow Function**
- **DOM (eventListener)** `DOM element`

### 在物件導向 ( OOP ) 和 obj 中使用

```js
// 在物件導向(OOP)時, 指向 class 本身
class Cat {
  constructor(name) {
    this.name = name;
  }
  sayMeow() {
    console.log(this);
    console.log(this.name, "meow");
  }
}

let fatCat = new Cat("fatCat");
fatCat.sayMeow(); // Cat {name:'fatCat'} 'fatCat meow'

//在物件(obj)中使用, 指向 obj 本身
const obj = {
  name: "apple",
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName(); // 'apple'
```

### 在 Function 中使用, 指向全域環境 window/global/undefined

```js
function func() {
  function a() {
    console.log(this);
  }
  a();
}
func();
// 瀏覽器 > window
// node.js > global
// strict > undefined
```

### 箭頭函式 ( arrow function ) 的 this

- 與怎麼呼叫無關
- 跟 this 在哪裡被定義有關係, 類似 scope 的行為 ( 會是 this 最一開始被定義的時候的 this 的值 )

```js
class Test {
  run() {
    console.log("run this", this); // run this Test{}
    setTimeout(function () {
      console.log(this);
    }, 1000); // Window
  }
}
let a = new Test();
a.run();

//
class Test {
  run() {
    console.log("run this", this); // run this Test{}
    setTimeout(() => {
      console.log(this);
    }, 1000); // Test{}
  }
}
let a = new Test();
a.run();
```

### 在 DOM 環境中的 this

```js
document.querySelector("#obj").addEventListener("Click", () => {
  console.log(this);
});
// 'DOM obj'
// ex: 點 button，this 會是點到的 button
```
