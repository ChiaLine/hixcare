import { createLiElement, clearLi } from './renderPromise.js'
// console.log( createLiElement, clearLi )

// 建立 函數回傳： new promise物件(執行延遲計算函數)
function delayedAdd(n1, n2, delayTime){
  return new Promise(function(resolve, reject){
    createLiElement(`執行 ${delayTime/1000} 秒後回傳計算值`)
    window.setTimeout(function(){
      resolve(n1 + n2) // 工作完成呼叫res函數結果透過參數傳遞進去
      // reject(new Error(`失敗(rejected)`))  // 工作失敗呼叫rej函數
    }, delayTime)
  })
}

// 基礎使用 then ＆ catch 接 promise物件回傳值
function clickPromiseThenCatch(){
  let promise = delayedAdd(3, 4, 2000)
  // 接到 promise 物件回傳值 .then
  promise
  .then(function(res){
    createLiElement(`計算結果: ${res}`)
  })
  .catch(function(err){
    createLiElement(err)
  })
  .finally(function(){
    clearLi() // finally 方法不論結果回傳是成功失敗 都會執行
  })
}

// 同時處理多個 Promise.all使用
function clickPromiseAll() {
  let promise = delayedAdd(3, 4, 2000)
  let promise2 = delayedAdd(3, 4, 3000)

  Promise.all([promise, promise2]) // 多個 promise 同時處理完後，才繼續工作
  .then(function(res){
    createLiElement(`${res[0]} + ${res[1]} = ${res[0] + res[1]}`) // 回傳值 [結果,結果]
  })
  .catch(function(err){
    createLiElement(err)
  })
  .finally(function(){
    window.setTimeout(function(){
      clearLi() 
    },1000)
  })
}

// async/await 簡化 promise 語法 
async function clickAsyncAwait(){
  try {
    console.log('hoverTest')
    // 前提 async的函數必須回傳 promise 物件
    let promise = await delayedAdd(4, 4, 1000)
    createLiElement(`計算結果： ${promise}`)
  } catch (error) {
    createLiElement(error)
  } finally {
    console.log("finally")
    window.setTimeout(function(){
      clearLi() 
    },1000)
  }
}

window.clickAsyncAwait = clickAsyncAwait
window.clickPromiseAll = clickPromiseAll
window.clickPromiseThenCatch = clickPromiseThenCatch