let mingRunPromise = (someone) => {
  let ran = parseInt(Math.random() * 2); // 隨機成功或失敗
  console.log(`${someone} 開始跑開始`);
  return new Promise((resolve, reject) => {
    // 傳入 resolve 與 reject，表示資料成功與失敗
    if (ran) {
      setTimeout(function(){
        // 3 秒時間後，透過 resolve 來表示完成
        resolve(`${someone} 跑 3 秒時間(fulfilled)`);
      }, 3000);
    } else {
      // 回傳失敗
      reject(new Error(`${someone} 跌倒失敗(rejected)`))
    }
  });
}

const but = document.querySelector('.green')

but.addEventListener('click', event => {
  // console.log(event)

  let mingRun = mingRunPromise(event.target.innerHTML)
  createLiElement(`${event.target.innerHTML} 開始跑`)

  mingRun
  .then((data)=> {
    // 成功訊息 (需要 3 秒)
    console.log(data);
    createLiElement(data)
    clearLi()
  }).catch((err)=> {
    // 失敗訊息 (立即)
    console.log(err)
    createLiElement(err)
    clearLi()
  });
})

// 取得＆建立節點、新增＆清除 更新畫面資料
const ul = document.querySelector('#log')

function createLiElement(value){
  const a = document.createElement('li')
  a.innerHTML = value
  ul.appendChild(a)
}

function clearLi() {
  window.setTimeout(function(){
    ul.innerHTML = '<li class="mb-2">回傳結果： 三秒後清除內容</li>'
  }, 3000)
}