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

function getGrad1(init, current){
  // console.log(init, current)

  if (current.grade === 1) {
    init["grade1"] += current.score // 取 全部總分
    init["gradeTotal1"]++ // 取 次數
  } else if (current.grade === 2) {
    init["grade2"] += current.score
    init["gradeTotal2"]++
  } else if (current.grade === 3) {
    init["grade3"] += current.score
    init["gradeTotal3"]++
  }

  return init
}

const averageScore = arr.reduce(getGrad1, { grade1: 0, gradeTotal1: 0, grade2: 0, gradeTotal2: 0, grade3: 0, gradeTotal3: 0})

console.log("-------- { }分組 ---------")
console.log('分組', averageScore)

console.log("-------- 平均分數 ---------")
console.log('年級一', averageScore.grade1 / averageScore.gradeTotal1)
console.log('年級二', averageScore.grade2 / averageScore.gradeTotal2)
console.log('年級三', averageScore.grade3 / averageScore.gradeTotal3)
