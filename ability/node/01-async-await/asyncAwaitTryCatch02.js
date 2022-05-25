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
    const pack1 = pack("廚房", 1000).catch((e) => e) // 新增 catch 存入 message
    const pack2 = pack("客廳", 2000).catch((e) => e)
    const pack3 = pack("房間", 500).catch((e) => e)

    const ps = await Promise.all([pack1, pack2, pack3]) // 等待所有的回傳值 再一起處理

    let message = '' 
    ps.forEach((p) => {
      if (p instanceof Error) {
        message += p.message + '\n'
      }
    })
    if (message !== '') throw new Error(message) // 打包 所有的例外處理 丟給catch
    
    console.log(p1, '1')
    console.log(p2, '2')
    console.log(p3, '3')

    console.log('順利結束大搬家!!')

  } catch(e) {
    console.log(`${e} 搬家時間要往後延！！！`) // 接 throw 給的 message
  }
}

// home3()


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



// 搬家 同時打包 最後在一起處理
async function home4() {
  const pack1 = await pack("廚房", 0).catch((e) => {
    // console.log(e)
  })
  console.log(pack1, '1')
  
  const pack2 = await pack("客廳", 2000).catch((e) => {
    // console.log(e)
    return `${e}，在買新的吧！`
  })
  console.log(pack2, '2')

  const pack3 = await pack("房間", 2000).catch((e) => {
    // console.log(e)
    return `${e}，在買新的吧！`
  })
  console.log(pack3, '3')

  console.log('順利結束大搬家!!')
}

home4()
