// 取得＆建立節點、新增＆清除 更新畫面資料
const ul = document.querySelector('#log')

function createLiElement(value){
  const a = document.createElement('li')
  a.innerHTML = value
  ul.appendChild(a)
}

function clearLi() {
  // const ul = document.querySelector('#log')
  window.setTimeout(function(){
    ul.innerHTML = '<li class="mb-2">回傳結果： 三秒後清除內容</li>'
  }, 3000)
}

// module.exports = {createLiElement, clearLi };

export { createLiElement, clearLi }