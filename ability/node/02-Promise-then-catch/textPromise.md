# Promise (用於流程控制、非同步、異步)

### 問題的起源: 當出現非同步程式時 會轉交給 return 會失效
### 解決異步問題三種做法（回呼函式 Callbacks、Promises、Async/Await）
``` js
// Promise 的狀態與流程
pending: 等待中的初始狀態 // 進入 Promise 就進入 pending (等待事件完成)
fulfilled: 正確完成 // resolve()
rejected: 已拒絕，操作失敗 //reject()
```

# 建立 Promise 的事件，等待需要調用的時候呼叫它
## Promises 物件 用法
### 透過 resolve、reject 兩個變數來傳送成功與失敗的訊息。
### 與此相對應的會有 then() 及 catch()來接收。

``` js
// 建立 Promises 物件： new Promises(執行程式)
const promise1 = new Promise((resolve, reject) => {
  // 放要處理的事情
    resolve() // 回傳成功
    reject() // 回傳失敗
});

console.log(promise1); // expected output: [object Promise]

promise1.then((value) => {
  console.log(value); // 接回傳成功的值
});
.catch((error) => {
  console.log(error); // 接失敗的內容
});
```
---

## Promise.all() 會同時執行 多個 Promise，在全部完成後統一回傳陣列，此陣列的內容也是 promise 中 resolve 的內容
``` js
Promise.all([runPromise(...), runPromise(...)])
  .then((arrays) => {
    // 僅會回傳一個最快完成的 resolve 或 reject 
    console.log('在全部完成後 統一回傳陣列',arrays);  
  })
  .catch((err) => {
    console.log(err) // 只要有錯誤會直接跳 catch
  });
```
---

## Promise.race 傳入多個 promise 事件，此方法僅會回傳第一個完成的事件
``` js
Promise.race([runPromise(...), runPromise(...)])
  .then((data) => {
    console.log('僅會回傳一個最快完成的promise事件', data); 
  })
  .catch(err => {
    console.log(err)
  });

```
---

## Chain 鏈接方法 可以善用 Promise 的 then() 所有return的資料內容會在下一個 then 接收，用此方法就可以減少 Callback 問題，也可依序執行不同的 promise 事件

``` js
promise(...) // 1呼叫 promise物件
  .then((data)=> {
    console.log(data) // 要做的事 1
    return promise(...) // 2再次呼叫 promise物件
  })
  .then((data)=> {
    console.log(data) // 要做的事 2
    return promise(...) // 3再次呼叫 promise物件
  })
  .then((data)=> {
    console.log(data) // 要做的事 3
  })
  .catch((err)=> {
    console.log(error); // 接失敗的內容
  });
```
---
