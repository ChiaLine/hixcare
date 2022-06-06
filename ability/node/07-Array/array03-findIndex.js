// Method	用途 尋找陣列中符合的元素 取第一個符合項目的位置
// Array.prototype.findIndex()	
// ? 依據提供的測試函式，尋找陣列中符合的元素，並返回其 index（索引）沒有符合對象，將返回 -1 
// ? 函式運算 可傳入三個參數(element, index, array)
// ! 失敗回傳值 -1

// 一般 Method	Array.prototype.indexOf() 第一個被找到之索引，若不存在於陣列中則回傳 -1

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
console.log(numbers)

console.log("-------- findIndex 找出 第一個 > 2 ---------")
const n1 = numbers.findIndex(n => {
  return n > 2
})
console.log('位置:', n1)
console.log('值：', numbers[n1])

console.log("-------- findIndex 找出 第一個 < 0 ---------")
const n2 = numbers.findIndex(n => {
  return n < 0
})
console.log('位置:', n2)
console.log('值：', numbers[n2])


console.log("-------- indexOf 找出 1 13 ---------")
console.log('位置:', numbers.indexOf(1) )
console.log('位置:', numbers.indexOf(13) )