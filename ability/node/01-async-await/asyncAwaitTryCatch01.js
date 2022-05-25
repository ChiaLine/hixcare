// 1 使用 await 煮飯應用
async function getRes1() {
  // await new Promise(resolve => setTimeout(() => resolve(), 3000));

  const number1 = Math.floor(Math.random() * 2) + 1 // 隨機米杯 1 ~ 2
  const number2 = Math.floor(Math.random() * 2) + 1 // 隨機水杯 1 ~ 2
  
  if (number1 !== number2) {
    // throw `丟給 catch 的參數錯誤值`
    throw new Error(`水的比例不對 ${number1} : ${number2}`) // 例外處理陳述式
  }
  
  return `成功把飯煮熟`
}

async function main() {
  const startTime = Date.now() // 計算時間 1

  const p1 = getRes1().catch((e) => {
    console.log(e)
    return '吃噴'
  })

  const p2 = getRes1().catch((e) => {
    console.log(e)
    return '吃噴'
  })

  const r1 = await p1
  const r2 = await p2

  const elapsed = Date.now() - startTime // 計算時間 2
  console.log(`${elapsed}ms`)

  console.log(r1)
  console.log("媽媽開始準備配菜")
  console.log("準備開吃")

  console.log(r2)
  console.log("媽媽開始準備配菜")
  console.log("準備開吃")

}

main()


// 搭配  try catch 會無法直接針對錯誤進行處理
async function main2() {
  try {
    const p1 = await getRes1()
    
    console.log(p1)
    console.log("p1媽媽開始準備配菜")
    console.log("準備開吃")

    const p2 = await getRes1()
    console.log(p2)
    console.log("p2媽媽開始準備配菜")
    console.log("準備開吃")
  } catch(e) {
    console.log(e, 'error')
  }
}

// main2()
