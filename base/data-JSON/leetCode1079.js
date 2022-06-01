const tiles = "AAB"

const numTilePossibilities = function(tiles) {
  // 紀錄
  let count = []
  for(let i = 0; i < 26; i++) {
    count.push(0)
  }
  // 位置＆字串次數
  for(let i = 0; i < tiles.length; i++) {
    // charCodeAt()可返回字符的Unicode 編碼
    const tileIndex = tiles.charCodeAt(i) - "A".charCodeAt(0)
    count[tileIndex]++
  }

  // 呼叫方法
  return dfs(count)
}

// 處理排列組合 DFS深度優先
function dfs(arr) {
  let sum = 0

  for (let i = 0; i < 26; i++) {
    // 停止條件
    if (arr[i] === 0) {
      continue // 不存在就跳下一個
    }

    sum++ // 記錄自己的當前組合
    arr[i]-- // 扣除用掉的數量
    sum += dfs(arr) // 遞歸 往下層
    arr[i]++ // 回遡 數量
  }

  return sum
}

console.log("有幾種組合：",numTilePossibilities(tiles))