import { createLiElement, clearLi } from './renderPromise.js'
import { mingRunPromise } from './mingRunPromise.js'
import { runPromise } from './runPromise.js'

const greenBut = document.querySelector('.green')

// 小明自己跑步 隨機 成功或失敗 
greenBut.addEventListener('click', event => {
  mingRunPromise(event.target.innerHTML,3000)
  .then((data)=> {
    // 成功訊息 (需要 3 秒)
    createLiElement(data)
  }).catch((err)=> {
    // 失敗訊息 (立即)
    createLiElement(err)
  }).finally(()=> {
    // 不論結果狀態都執行 清除
    clearLi()
  })
})

const blueBut = document.querySelector('.blue')

// 小明接力大賽 用.then 隨機成功或失敗 
blueBut.addEventListener('click', event => {
  mingRunPromise(event.target.innerHTML, 1000)
  .then((data)=> {
    createLiElement(data) // 接 小明的回傳值
    createLiElement(`${event.target.innerHTML} 結束，下一位`)
    return mingRunPromise('阿姨', 3000) // 調用 promise
  })
  .then((data)=> {
    createLiElement(data) // 接 阿姨的回傳值
    createLiElement('結束，下一位')
    return mingRunPromise('爺爺', 500)
  })
  .then((data)=> {
    createLiElement(data) // 接 爺爺的回傳值
    createLiElement('END')
  })
  .catch((err)=> {
    createLiElement(err)
  })
  .finally(()=> {
    clearLi()  // 不論結果狀態是啥 都執行 清除
  })
})

const pinkBut = document.querySelector('.pink')
// Promise.all 方法
pinkBut.addEventListener('click', (event) => {
  // console.log(event)

  Promise
  .all([runPromise('小明', 1000, true), runPromise('阿姨', 3000, true)])
  // .all([mingRunPromise('小明', 1000, true), mingRunPromise('阿姨', 2000, true)])
  .then((arrays)=> {
    console.log(arrays)
    arrays.forEach(array => {
      console.log(array)
      createLiElement(array)
    })
  })
  .catch((err)=> {
    createLiElement(err)
  })
  .finally(()=> {
    clearLi() 
  })
})

const orangeBut = document.querySelector('.orange')
//Promise.race 方法
orangeBut.addEventListener('click', (event) => {
  let ran1 = parseInt(Math.random() * 6 +1) * 1000;
  let ran2 = parseInt(Math.random() * 6 +1) * 1000;
  console.log(ran1, ran2)
  
  Promise
  .race([runPromise('小明', ran1, true), runPromise('阿姨', ran2, true)])
  // .race([runPromise('小明', 1000, false), runPromise('阿姨', 200, true)])
  .then((data)=> {
    console.log(data)
    createLiElement(`${data}，速度最快`)
  })
  .catch((err)=> {
    createLiElement(err)
  })
  .finally(()=> {
    clearLi() 
  })
})