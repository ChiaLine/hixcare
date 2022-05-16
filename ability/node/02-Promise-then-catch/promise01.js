import { createLiElement, clearLi } from './renderPromise.js'
import { mingRunPromise } from './mingRunPromise.js'

const greenBut = document.querySelector('.green')

greenBut.addEventListener('click', event => {
  // console.log(event.target);
  // 小明自己跑步 隨機成功或失敗 
  mingRunPromise(event.target.innerHTML,3000)
  .then((data)=> {
    // 成功訊息 (需要 3 秒)
    createLiElement(data)
    clearLi()
  }).catch((err)=> {
    // 失敗訊息 (立即)
    createLiElement(err)
    clearLi()
  });
})
