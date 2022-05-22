// 取得＆建立節點、新增＆清除 更新畫面資料
const ul = document.querySelector('#log')

function createLiElement(value){
  const a = document.createElement('li')
  a.innerHTML = value
  ul.appendChild(a)
}

function clearLi() {
  createLiElement(`三秒後，自動清除內容！！！`)
  window.setTimeout(function(){
    ul.innerHTML = '<li class="mb-2">回傳結果：</li>'
    alert(`清除內容`)
  }, 3000)
}


export { createLiElement, clearLi } // 具名匯出 使用物件縮寫的形式（匯出物件

// 也可再匯出前可另外使用 as 修改物件名稱 如下：
// export { clearLi as obj }