import { createLiElement, clearLi } from './renderPromise.js'
import { mingRunPromise } from './mingRunPromise.js'
import { runPromise } from './runPromise.js'

const greenBut = document.querySelector('.green')

// 小明自己跑步 隨機成功或失敗 
greenBut.addEventListener('click', event => {
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

const blueBut = document.querySelector('.blue')

// 接力大賽 用.then 隨機成功或失敗 
blueBut.addEventListener('click', event => {
  mingRunPromise(event.target.innerHTML, 1000)
  .then((data)=> {
    createLiElement(data)
    createLiElement('下一位')
    return mingRunPromise('阿姨', 3000)
  })
  .then((data)=> {
    createLiElement(data)
    createLiElement('下一位')
    return mingRunPromise('爺爺', 500)
  })
  .then((data)=> {
    createLiElement(data)
    createLiElement('END')
    clearLi()
  })
  .catch((err)=> {
    createLiElement(err)
    clearLi()
  });
})

const pinkBut = document.querySelector('.pink')
// Promise.all 方法
pinkBut.addEventListener('click', (event) => {
  // console.log(event)
  Promise.all([runPromise('小明', 1000, true), runPromise('阿姨', 2000, true)])
  .then((arrays)=> {
    console.log(arrays)
    arrays.forEach(array => {
      createLiElement(array)
    })
  })
  .catch((err)=> {
    createLiElement(err)
  })
})
const orangeBut = document.querySelector('.orange')
//Promise.race 方法
orangeBut.addEventListener('click', (event) => {
  Promise.race([runPromise('小明', 1000, true), runPromise('阿姨', 200, true)])
  .then((data)=> {
    createLiElement(data)
  })
  .catch((err)=> {
    createLiElement(err)
  })
})