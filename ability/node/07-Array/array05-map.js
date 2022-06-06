// Method	用途 陣列轉換 適合將原始的變數運算後重新組合一個 新的陣列
// Array.prototype.map()	
// ? 會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
// ! 如果不回傳則是 undefined


const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
console.log(numbers)

console.log("-------- map 回傳條件判斷 布林值 ---------")
const n1 = numbers.map(n => {
  return n % 2 === 0
})
console.log(n1) 

console.log("-------- map 回傳+1 ---------")
const n2 = numbers.map(n => {
  return n + 1
})
console.log(n2) 


console.log("-------- map 不回傳時則是 undefined ---------")
const mapEmpty = numbers.map(function (item, index, array) {
});
console.log(mapEmpty);