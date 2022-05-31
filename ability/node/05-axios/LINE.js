// $.post('你部署的應用程式網址',
//     {msg:'網頁發訊息'},
//     function(e){
//         console.log(e);
// });
const axios = require('axios').default 

async function postMessage(m){
  try {
    console.log('postMessage', m)
    const response = await axios({
    method: 'post',
    url: `https://notify-api.line.me/api/notify`,
    params: {
      message: m
    },
    headers: {
      Authorization: `Bearer QS1apjr7MLUn6w2eIhDEH8Sln6hpN4M9q3vwMRkeCqF`,
    }
  })

  } catch(e) {
    console.log(e)
  }
}

postMessage("egg")
postMessage("egg1")
postMessage("egg2")
