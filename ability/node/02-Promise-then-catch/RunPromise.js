import { createLiElement } from './renderPromise.js'

let runPromise = (someone, time, success) => {
  createLiElement(`${someone} 同時開始跑`);
  return new Promise((resolve, reject) => {
    if (success) {
      setTimeout(function(){
        // 透過 resolve 來表示完成
        resolve(`${someone} 跑 ${time/1000}秒時間(fulfilled)`);
      }, time);
    } else {
      // 回傳失敗
      reject(new Error(`${someone} 跌倒失敗(rejected)`))
    }
  });
}

export { runPromise }