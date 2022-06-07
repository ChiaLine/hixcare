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

// 8筆資料 分 3組
function getGrad(init, current) {
  // console.log(init, current)
  if (current.grade === 1) {
    init[0].push(current.score)
  } else if (current.grade === 2) {
    init[1].push(current.score)
  } else if (current.grade === 3) {
    init[2].push(current.score)
  }
  return init
}

// 每組資料加總
function grtScore(init, current) {
  // console.log(init , current)
  return init + current
}

const averageScore = arr.reduce(getGrad, [[], [], []])

console.log("-------- [ ] 分組 ---------")
console.log('年級', averageScore, "長度：", averageScore.length)

// console.log("-------- map 取得平均分數 ---------")
// const res = averageScore.map(element => {
//   return element.reduce(grtScore, 0) / element.length
// })
// console.log(res)

console.log("-------- forEach 印出 平均分數 ---------")
averageScore.forEach(element => {
  console.log(
    element.reduce(grtScore, 0) / element.length
  )
})
