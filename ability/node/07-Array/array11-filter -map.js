// Array.prototype.filter()  // ! 失敗回傳值 []
// ? 篩選陣列中符合的元素 只取特定條件的項目  

// Array.prototype.map()	// ! 如果不回傳則是 undefined
// ? 只取全部資料裡的部分項目 

// 資料結構 年級 分數
const arr2 = [
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

console.log("--------用 filter 取 二年級的資料 ---------")
const res = arr2.filter((el) => {
  // return el.grade === 2
  return el.grade === 2 && el.score > 80
})
console.log(res)
console.log('陣列長度：', res.length)


console.log("--------用 map 取 所有的成績 ---------")
const res1 = arr2.map((el) => {
  // return el.score
  return {
    id: 1,
    score: el.score
  }
})
console.log(res1)
console.log('陣列長度：', res1.length)