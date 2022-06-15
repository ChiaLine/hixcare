// ? 取節點
const button = document.querySelector('.dark-toggle')
const peer = document.querySelector('.peer')
console.log(button)
console.log(peer)

// ? 事件綁定
button.addEventListener('click', darkToggle)
peer.addEventListener('click', darkToggle)

// ? 切換 class
function darkToggle() {
  // 確認 className
  console.log(document.documentElement.classList.contains("dark"))

  // 自動切換 存在則刪、不存在則＋
  // console.log(document.documentElement.classList)
  // document.documentElement.classList.toggle("dark")
  
  // 條件判斷 存在則刪、不存在則＋
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
}