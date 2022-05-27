const axios = require('axios').default; 

// axios 錯誤處理 URL打錯
axios.get('https://randomuser.me/api/123') // 404
  .then((response)=> {
    // console.log(response.data)
    console.log('狀態碼', response.status)
  })
  .catch(function (error) {
    console.log('進入 catch 處理 error資訊')
    // console.log('所有error資訊 ', error)
    if (error.response) {
      console.log('请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围')
      console.log(error.response.data); // 查看回傳 資料
      console.log(error.response.status); // 查看回傳 狀態碼
      console.log(error.response.headers); // 查看回傳 資訊
    } else if (error.request) {
      // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
      // 而在node.js中是 http.ClientRequest 的实例
      console.log('请求成功 没收到响应', error.request);
    } else {
      console.log('发送请求时出了点问题', error.message);
    }
    console.log('请求的配置信息', error.config);
  });

