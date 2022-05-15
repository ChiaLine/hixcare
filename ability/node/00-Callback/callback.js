const step0 = 'step 0 - start'
const step1 = 'step 1 - run'
const step2 = 'step 2 - run'
const stepDone = 'step Done'

// 思考方向： callback、參數傳遞
// 預期的輸出結果： step 0 1 2 stepDone
// 點擊按鈕會觸發 start(stepEvent1)

const start = (callback) => {
  // 延遲 0.5秒後 執行程式
  setTimeout(() => {
    createLiElement(step0) // 建立 li 把值傳遞進去
    let fun = callback() // 執行stepEvent1 回傳值為 fun
    fun(stepEvent2) // 再執行fun 把stepEvent2 當參數傳入
  }, 500)
}

const stepEvent1 = () => {
  return (callback) => {
    setTimeout(() => {
      createLiElement(step1)
      let fun = callback() // 執行stepEvent2 回傳值為 fun
      fun(stepEventDone) // 再執行fun 把stepEventDone 當參數傳入
    }, 500)
  }
}

const stepEvent2 = () => {
  return (callback) => {
    setTimeout(() => {
      createLiElement(step2)
      callback(clearLi) // 執行stepEventDone 把clearLi 當參數傳入
    }, 500)
  }
}

const stepEventDone = (callback) => {
  setTimeout(() => {
    createLiElement(stepDone)
    callback() // 執行clearLi
  }, 500) 
}

// 取得＆建立節點、新增＆清除 更新畫面資料
const ul = document.querySelector('#log')

function createLiElement(value){
  const a = document.createElement('li')
  a.innerHTML = value
  ul.appendChild(a)
}

function clearLi() {
  window.setTimeout(function(){
    ul.innerHTML = '<li>預期結果：</li>'
  }, 3000)
}
