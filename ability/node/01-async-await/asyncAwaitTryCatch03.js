// 騎車 帶參數 動作
async function car(action) {
  const number = Math.floor(Math.random() * 2) // 隨機 0 / 1

  if (!number) {
    throw new Error(` ${action} 沒反應`)
  }

  return `成功 ${action} 完成動作`
}

async function getCar() {
  const car1 = await car("插入鑰匙").catch((e)=> {
    console.log(e)
    // return "改坐捷運"
  })

  if (car1 === undefined) {
    console.log("只能改坐捷運")
    return
  }
  
  console.log("1", car1)
  
  const car2 = await car("按下發動鈕").catch((e)=> {
    console.log(e)
  })
  
  if (car2 === undefined) {
    console.log("只能改坐捷運")
    return
  }
  console.log("2", car2)
  console.log("順利騎車回家！！")
}

getCar()


// 用 try catch
async function getCar1() {
  try {
    const car1 = await car("插入鑰匙")
    const car2 = await car("按下發動鈕")
    console.log("1", car1)
    console.log("2", car2)
    console.log("成功發動，騎車回家")
  } catch(err) {
    console.log(err)
  }
}

// getCar1()










// 想要使得錯誤的地方不影響async函數後續的執行的話，可以使用try catch
// async function async1 () {
// try {
// await Promise.reject('error!!!')
// } catch(e) {
// console.log(e)
// }
// console.log('async1');
// return Promise.resolve('async1 success')
// }

// async1().then(res => console.log(res))
// console.log('script start')


// 用 then 方式
// car("拔鑰匙")
// .then((d)=> {
//   console.log('dd', d)
//   return car("按下發動鈕")
// })
// .then((dd)=>{
//   console.log('ddd', dd)
//   console.log("成功發動，騎車回家")
// })
// .catch((e)=> {
//   console.log('ee', e)
// })