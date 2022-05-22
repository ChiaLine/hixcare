import { createLiElement } from './renderPromise.js'

let mingRunPromise = (someone, time) => {
  let ran = parseInt(Math.random() * 2); // 隨機 成功1 或 失敗0
  createLiElement(`${someone} 開始跑`);
  return new Promise((resolve, reject) => {
    if (ran) {
      setTimeout(function(){
        // 透過 resolve 來表示完成
        resolve(`${someone} 跑了 ${time/1000} 秒時間(fulfilled)`);
      }, time);
    } else {
      // 透過 reject 回傳失敗
      reject(new Error(`${someone} 跌倒失敗(rejected)`))
    }
  });
}

export { mingRunPromise } // 具名匯出 使用物件縮寫的形式（匯出物件

// 也可再匯出前可另外使用 as 修改物件名稱 如下：
// export { clearLi as obj }