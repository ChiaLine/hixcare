# Promises 流程控制、非同步、異步

### 問題的起源: 當出現非同步程式時 會轉交給 return 會失效
### 解決異步問題三種做法（回呼函式 Callbacks、Promises、Async/Await）

## Promises 物件 用法

``` js
// 建立 Promises 物件： new Promises(執行程式)
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]
```
---
