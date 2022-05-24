// 煮飯
const promise = new Promise((resolve, rejects) => {
  setTimeout(() => {
    try {
      const number1 = Math.floor(Math.random() * 3) + 1 // 隨機米杯 1 ~ 3
      const number2 = Math.floor(Math.random() * 3) + 1 // 隨機水杯 1 ~ 3
      
      if (number1 !== number2) {
        // throw `丟給 catch 的參數錯誤值`
        throw new Error(`水的比例不對 ${number1} : ${number2}`) // 例外處理陳述式
      }
      
      resolve(`成功把飯煮熟`)
    } catch (e) {
      rejects(`飯沒熟 ${e}`)
    }
  }, 1000)
})

promise.then((rse) => {
  console.log(rse)
  console.log("媽媽開始準備配菜")
  console.log("準備開吃")
})
.catch((e) => {
  console.log(e)
  console.log("媽媽要重新煮飯")
  console.log("晚餐時間延後")
})

