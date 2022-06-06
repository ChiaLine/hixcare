// Method	用途		
// Array.prototype.some()	檢查是否有符合條件的資料	
// ? 會透過給定函式、測試陣列中是否至少有一個元素，通過該函式所實作的測試。
// ? 函式運算 可傳入三個參數(currentValue, index, array)
//! 回傳值的是布林值。 失敗回傳值 false

// Array.prototype.includes() 一般方法 Method 判斷陣列是否包含特定的元素，回傳true或false

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(numbers)

console.log("-------- some 是否有 > 12---------")
const n1 = numbers.some(n => {
  return n > 12
})
console.log(n1) // false

console.log("-------- some +1 後是否有 > 12---------")
const n2 = numbers.some(n => {
  return (n + 1) > 12
})
console.log(n2) // true


console.log("-------- includes 是否有 1 18 ---------")
console.log(numbers.includes(1)) // true
console.log(numbers.includes(18)) // false

