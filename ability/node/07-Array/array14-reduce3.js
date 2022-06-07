// 資料結構 有 年級 分數
const arr = [
  {
    grade: 3,
    score: 60
  },
  {
    grade: 3,
    score: 61
  },
  {
    grade: 3,
    score: 62
  },
  {
    grade: 1,
    score: 70
  },
  {
    grade: 1,
    score: 71
  },
  {
    grade: 1,
    score: 72
  },
  {
    grade: 2,
    score: 80
  },
  {
    grade: 2,
    score: 81
  },
]

// 處理分數總計
function getGrad1(init, current){
  // console.log(init, current)
  if (current.grade === 1) {
    init[0].scoreTotal += current.score // 取 全部總分
    init[0].frequency++ // 取 次數
  } else if (current.grade === 2) {
    init[1].scoreTotal += current.score
    init[1].frequency++
  } else if (current.grade === 3) {
    init[2].scoreTotal += current.score
    init[2].frequency++
  }

  return init
}

// 設定 預設值 從結果導向思考
console.log("-------- [{},{},{}] 分組 ---------")
const averageScore = arr.reduce(getGrad1, [{
  scoreTotal: 0,
  frequency: 0
},{
  scoreTotal: 0,
  frequency: 0
},{
  scoreTotal: 0,
  frequency: 0
}])
console.log(averageScore)


console.log("-------- 計算每組 平均分數 ---------")
const mapAverageScore = averageScore.map((element) => {
  return element.scoreTotal / element.frequency
})
console.log(mapAverageScore)
