import { createLiElement } from './renderPromise.js'

let mingRunPromise = (someone, time) => {
  let ran = parseInt(Math.random() * 2); // 隨機成功1或失敗0
  createLiElement(`${someone} 開始跑`);
  return new Promise((resolve, reject) => {
    if (ran) {
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

export { mingRunPromise }