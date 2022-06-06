// Method	用途 篩選陣列中符合的元素 取多個項目[] 不會修改呼叫它的原始陣列
// Array.prototype.filter() 
// ? 建立一個經指定之函式運算後，由原陣列中通過該函式檢驗為 true 的元素所構成的 新陣列
// ? 函式運算 可傳入三個參數(element, index, array)
// ! 失敗回傳值 []

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
console.log(numbers)

console.log("-------- filter 找出偶數 ---------")
const even = numbers.filter(n => {
  return n % 2 === 0
})
console.log(even) 

console.log("-------- filter 找出奇數 ---------")
const odd = numbers.filter(n => {
  return n % 2 === 1
})
console.log(odd) 

console.log("-------- filter 找出 > 13 ---------")
const n = numbers.filter(n => {
  return n > 13
})
console.log(n) 