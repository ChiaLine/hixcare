const axios = require('axios').default; 

// 隨機 發出 HTTP請求碼
async function getHTTP(){
  try {
    const httpNumbers = [100, 103, 201, 205, 304, 308, 403, 408, 502, 511]
    const index = parseInt(Math.random() * 10); // 隨機 0 ~ 9
    const httpNumber = httpNumbers[index]

    const response = await axios.get(`https://httpstat.us/${httpNumber}`)
    console.log("請求完成", response)

  } catch (error) {
    console.log("進入catch 區域 Error:", error.message)
    console.log(error.response.data)
    console.log(error.config)
  }
}

getHTTP()

// 1 會一直跑 無反應
// 2 正常
// 300 304 306 進 catch 其他 3 正常
// 4 進 catch 
// 5 進 catch 
