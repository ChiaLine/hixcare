// Array.prototype.forEach()	// ! 失敗回傳值 undefined 
// ? 會將陣列內的每個元素遍歷，皆傳入並執行給定的函式一次
// ? 函式運算 可傳入三個參數(currentValue, index, array)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(numbers)

console.log("-------- forEach 印出所有 值 & 位置 ---------")
numbers.forEach((n, i) => console.log(`值：${n} 位置：${i}`));

console.log("-------- forEach 印出 13 ---------")
const n = numbers.forEach((n) => {return n > 13});
console.log(n) // ! 失敗回傳值 undefined 
