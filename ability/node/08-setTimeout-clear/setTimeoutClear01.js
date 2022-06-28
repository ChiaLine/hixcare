// ? console.log('延遲處理setTimeout-刪除clearTimeout練習區')

// timeoutID 您要取消定时器的标识符。该 ID 由相应的setTimeout()调用返回
// ! 當執行有 2次 取消有 1次 兩個 timeoutID 都一樣 只有第一個會被取消
// ! 當執行有 2次 取消有 2次 兩個 timeoutID 會不一樣 都會被取消

// const start = 0 // 第一個字
const randomSpeed = parseInt(Math.random() * 10) / 10
console.log('速度：', randomSpeed, '有在 0.6秒內:', randomSpeed < 0.6)

function show() {
  console.log("show Hello!")
}
// ? 6秒後做事 
const timeoutID = setTimeout(show, 600);
console.log('id：', timeoutID)

// ? 取消做事
if (randomSpeed < 0.6) {
  console.log('取消執行 6 秒 做事')
  clearTimeout(timeoutID)
}
