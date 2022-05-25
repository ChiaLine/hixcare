// 帶入參數 區域 時間
async function pack(area, time) {
  await new Promise(resolve => setTimeout(() => resolve(), time));

  const number = Math.floor(Math.random() * 2) // 隨機 0 / 1

  if (!number) {
    throw new Error(`${area} 有東西忘了收`)
  }

  return `${area} 順利打包`
}

// try catch ＋ 同時打包但 await等都打包完才搬家 ＆＆ 如果漏掉打包 就不能搬家了
async function home3() {
  try {
    const pack1 = pack("廚房", 1000).catch((e) => e)
    const pack2 = pack("客廳", 2000).catch((e) => e)
    const pack3 = pack("房間", 500).catch((e) => e)
    // console.log(pack1, pack2, pack3)

    const ps = await Promise.all([pack1, pack2, pack3])
    
    let message = '' 
    ps.forEach((p) => {
      if (p instanceof Error) {
        message += p.message + '\n'
      }
    })
    if (message !== '') throw new Error(message)
    
    console.log(p1, '1')
    console.log(p2, '2')
    console.log(p3, '3')

    console.log('順利結束大搬家!!')

  } catch(e) {
    console.log(`${e} 搬家時間要往後延！！！`)
  }
}

home3()


// 搬家 同時打包 最後在一起處理
async function home2() {
  const pack1 = pack("廚房", 0).catch((e) => {
    // console.log(e)
  })

  const pack2 = pack("客廳", 2000).catch((e) => {
    // console.log(e)
    return `${e}，在買新的吧！`
  })

  const pack3 = pack("房間", 2000).catch((e) => {
    // console.log(e)
    return `${e}，在買新的吧！`
  })


  const p1 = await pack1
  const p2 = await pack2
  const p3 = await pack3

  console.log(p1, '1')
  console.log(p2, '2')
  console.log(p3, '3')
  console.log('順利結束大搬家!!')
}

// home2()




// 廚房打包 
async function packKitchen() {
  await new Promise(resolve => setTimeout(() => resolve(), 3000));
  const number = Math.floor(Math.random() * 2) // 隨機 0 1

  if (!number) {
    throw new Error("忘記打包電鍋")
  }

  return "廚房順利打包"
}

// 客廳打包
async function packParlour() {
  await new Promise(resolve => setTimeout(() => resolve(), 3000));
  const number = Math.floor(Math.random() * 2) // 隨機 0 1

  if (!number) {
    throw new Error("忘記收抱枕")
  }

  return "客廳順利打包"
}

// 房間打包
async function packRoom() {
  await new Promise(resolve => setTimeout(() => resolve(), 3000));
  const number = Math.floor(Math.random() * 2) // 隨機 0 1

  if (!number) {
    throw new Error("忘記收枕頭")
  }

  return "房間順利打包"
}

// 使用 await 等待時間較長 每個 3秒後 ＝ 9
async function home() {
  const pack1 = await packKitchen().catch((e) => {
    // console.log(e)
    return `${e}，買新的`
  })
  console.log(pack1, '1')

  const pack2 = await packParlour().catch((e) => {
    // console.log(e)
    return `${e}，買新的`
  })
  console.log(pack2, '2')

  const pack3 = await packRoom().catch((e) => {
    // console.log(e)
    return `${e}，買新的`
  })
  console.log(pack3, '3')

  console.log('順利大搬家!!')
}

// 使用 await 等待時間較長 每個 3秒後 ＝ 9
// home() 