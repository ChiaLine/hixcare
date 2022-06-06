// Method	用途 尋找陣列中符合的元素 取第一個符合項目的值
// Array.prototype.find()	
// ? 回傳 第一個滿足 所提供之測試函式的元素值
// ? 函式運算 可傳入三個參數(element, index, array)
//! 失敗回傳值	undefined

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
console.log(numbers)

console.log("-------- find 找出 第一個 > 2 ---------")
const n1 = numbers.find(n => {
  return n > 2
})
console.log(n1)

console.log("-------- find 找出 第一個 < 0 ---------")
const n2 = numbers.find(n => {
  return n < 0
})
console.log(n2) 