let mingRunPromise = (someone, time) => {
  return new Promise((resolve, reject) => {
    try{
      // const ran = parseInt(Math.random() * 2); // 隨機 成功1 失敗0
      const ran = 1 // 成功

      console.log(`${someone} 開始跑.. ${ran}`);

      // 條件判斷
      if (!ran) {
        return reject(new Error(`${someone} 跌倒失敗(rejected)`))
      }
      
      setTimeout(function(){
        try {
          resolve(`${someone} 跑了 ${time/1000} 秒時間(fulfilled)`);
          const i = 3/0   // Infinity
          const j = null
          j.foo()
        } catch(e) {
          console.log("catch區:", e)
        }
      }, time);
      

      // j.foo() // 未定義
      
      // setTimeout(function(){
      //   resolve(`${someone} 跑了 ${time/1000} 秒時間(fulfilled)`);
      //   const i = 3/0   // Infinity
      //   const j = null
      //   j.foo()
      // }, time);
      

    } catch(err){
      console.log("進入catch區塊：", err)
    }
  });
}

mingRunPromise('egg',1000)
  .then((data)=> {
    console.log("成功resolve訊息:", data)
  }).catch((err)=> {
    console.log("reject訊息:", err)
  })


  // !故意把拋出錯誤：ㄋ
  // !放 setTimeout 外面且上方 會跳到 catch 區塊進行 不會執行到 setTimeout
  // !放 setTimeout 外面且下方 先執行setTimeout 在跳 catch 拋出錯誤 .then區塊依然會接到回傳結果
  
  // !原版狀況：
  // !把拋出錯誤 放 setTimeout 裡面 上或下方 都不會跳到 catch 區塊 即使擺在下方有執行到 resolve 才遇到錯誤 因js特性遇錯會自動中斷執行 因此不會執行.then區塊
  
  // !解決方式 在 setTimeout裡面 新增 try {} catch{} 
  // !在 resolve 上方 會跳到 catch 區塊
  // !在 resolve 下方 會執行後 在跳到 catch 區塊 因此.then區塊依然會執行

  // 補充： 內外都放 會跳入 內外 兩個 catch 區塊

  // const i = 3/0   // Infinity
  // const j = null // null類型是物件
  // j.foo() // 無法讀取 foo 屬性不存在 
