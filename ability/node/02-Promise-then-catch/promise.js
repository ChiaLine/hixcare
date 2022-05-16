import { createLiElement, clearLi } from './renderPromise.js'
// console.log( createLiElement, clearLi )

// 問題的起源（當出現非同步時 return 會失效） 流程控制、非同步、異步

function delayedAdd(n1, n2, delayTime){
  // 建立 promise 物件： new promise(執行延遲計算函數)
  return new Promise(function(resolve, reject){
    createLiElement(`執行 ${delayTime/1000} 秒後回傳計算值`)
    window.setTimeout(function(){
      resolve(n1 + n2) // 工作完成呼叫res函數結果透過參數傳遞進去
      // reject(new Error(`失敗(rejected)`))
    }, delayTime)
  })
}

function clickPromiseThenCatch(){
  let promise = delayedAdd(3, 4, 2000)
  // 接到 promise 物件回傳值 .then
  promise
  .then(function(res){
    createLiElement(res)
    clearLi()
  })
  .catch(function(err){
    createLiElement(err)
    clearLi()
  })
}

function clickPromiseAll() {
  let promise = delayedAdd(3, 4, 2000)
  let promise2 = delayedAdd(3, 4, 3000)
   // 多個 promise 處理完後，才繼續工作
  Promise
  .all([promise, promise2]).then(function(res){
    createLiElement(res[0] + res[1])
    clearLi()
  })
  .catch(function(err){
    createLiElement(err)
    clearLi()
  })
}


// async/await 簡化 promise 語法 
async function clickAsyncAwait(){
  try {
    console.log('hoverTest')
    // 前提 async的函數必須回傳 promise 物件
    let promise = await delayedAdd(4, 4, 3000)
    createLiElement(promise)
    clearLi()
    }catch (error) {
    createLiElement(error)
    clearLi()
    }
}

window.clickAsyncAwait = clickAsyncAwait
window.clickPromiseAll = clickPromiseAll
window.clickPromiseThenCatch = clickPromiseThenCatch