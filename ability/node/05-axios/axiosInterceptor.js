const axios = require('axios').default 

// 添加 请求 拦截器
axios.interceptors.request.use(function(req) {
  console.log(`出門前 ${req.url} 先網路訂電影票`)
  return req
})

// 添加 响应 拦截器
axios.interceptors.response.use(function (response) {
  switch (response.config.url) {
    case "https://httpstat.us/301":
      console.log("威秀搬家摟，請到...取票")
      break
    case "https://httpstat.us/302":
      console.log("12樓清掃中，取票櫃檯暫移8樓為您服務")
      break 
  }
  return response
}, function (error) {
  // 超出 2xx 状态码 触发
  switch (error.response.status) {
    case 304:
      console.log("下午場票已售完")
      break;
    case 400:
      console.log("沒有販售學生票")
      break;
    case 404:
      console.log("且試天下未上映")
      break;
    case 500:
      console.log("無法網路訂票")
      break;
    default:
      // 不預期錯誤 傳送通知
      postMessage(`不如預期的狀態碼錯誤：${error.response.status}`)
  }

  return Promise.reject(error)
})

async function getHTTP() {
  try {
    const httpNumbers = [301, 302, 304, 200, 500, 404, 400, 503, 502]
    const index = parseInt(Math.random() * 9); // 隨機 0 ~ 5
    const httpNumber = httpNumbers[index]

    const response = await axios.get(`https://httpstat.us/${httpNumber}`)
    // const response = await axios.get(`https://httpstat.us/503`)
    console.log(response.status, "成功完成訂票 出門")

  } catch(e) {
    console.log("改在家打電動好了")
    // console.log("進入catch 區域",e)
  }
}

getHTTP()

async function postMessage(message){

  try {
    console.log(message)
    const res = await axios({
      method: 'post',
      url: `https://notify-api.line.me/api/notify`,
      params: {
        message: message
      },
      headers: {
        Authorization: `Bearer QS1apjr7MLUn6w2eIhDEH8Sln6hpN4M9q3vwMRkeCqF`,
      }
    })
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}