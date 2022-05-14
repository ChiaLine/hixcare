// 流程控制、非同步、異步
// 問題的起源（當出現非同步時 return 會失效）
function delayedAdd(n1, n2, delayTime){
  // 建立 promise 物件： new promise(執行函數)
  return new Promise(function(resolve, reject){
    window.setTimeout(function(){
      // 工作完成呼叫res函數結果透過參數傳遞進去
      // resolve(n1 + n2) 
      // reject(false)
      console.log(n1 , n2)
    }, delayTime)
  })
}

function test(){
  let promise = delayedAdd(3, 4, 2000)
  console.log('test', promise)
  // 接到 promise 物件回傳值
  promise.then(function(res){
    console.log(res)
  }).catch(function(err){
    console.log(err)
  })
}

function clickTest() {
  console.log('clickTest')
  let promise = delayedAdd(3, 4, 2000)
  let promise2 = delayedAdd(3, 4, 2000)
   // 多個 promise 處理完後，才繼續工作
  Promise.all([promise, promise2]).then(function(res){
    // console.log(res)
    console.log(res[0] + res[1])
  }).catch(function(err){
    console.log(err)
  })
}


// async/await 簡化 promise 語法 
async function hoverTest(){
  try {
    console.log('hoverTest')
    // 前提 async的函數必須回傳 promise 物件
    let promise = await delayedAdd(4, 4, 3000)
    console.log(promise)
    }catch (error) {
    console.log(error)
    }
}
