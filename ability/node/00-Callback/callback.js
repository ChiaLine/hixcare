// 思考方向： callback、參數傳遞
// 預期的輸出結果： step 0 1 2 stepDone
// 點擊按鈕會觸發 start()

const step0 = 'step 0 - start'
const step1 = 'step 1 - run'
const step2 = 'step 2 - run'
const stepDone = 'step Done'


// const li  = document.createElement('li')

// const start = (callback) => {
//   setTimeout(() => {
//     console.log(step0)
//     callback()
//   }, 500)
// }

// const stepEvent1 = (step0) => {
//   console.log(step1)
//   stepEvent2(stepEventDone)
// }
// const stepEvent2 = (callback) => {
//   setTimeout(() => {
//     console.log(step2)
//     callback()
//   }, 500)
// }
// const stepEventDone = (step2) => {
//   console.log(stepDone)
// }

// start(stepEvent1)


const start = (callback) => {
  setTimeout(() => {
    console.log(step0)
    let res = callback()
    res(stepEvent2)
  }, 500)
}


const stepEvent1 = () => {
  return (callback) => {
    console.log(step1)
    let x = callback()
    x()
  }
}

const stepEvent2 = (x) => {
  return () => {
    setTimeout(() => {
      console.log(step2)
      stepEventDone()
    }, 500)
  }
}

const stepEventDone = () => {
  return console.log(stepDone)
}

start(stepEvent1)