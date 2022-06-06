// Method	用途	失敗回傳值	一般 Method
// Array.prototype.filter()	取多個項目[] -
// Array.prototype.find()	取一個項目	undefined -
// Array.prototype.findIndex()	取一個項目 - 1	Array.prototype.indexOf()
// Array.prototype.forEach()	undefined -
// Array.prototype.map()	陣列轉換 - -
// Array.prototype.reduce()	前後關聯計算 - -
// Array.prototype.some()	檢查是否有符合條件的資料	false	Array.prototype.includes()

const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7,  8, 9, 10, 11, 12 ]
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log("-------- filter() 使用函式 條件判斷 回傳取多個項目 ---------")
// ? 建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列
const log = numbers.filter((n)=> { return n > 5 })
console.log(log) 

const result = words.filter(word => word.length > 6);
console.log(result);

console.log("-------- find() 取一個項目 ---------")
// ? 回傳第一個滿足所提供之測試函式的元素值。否則回傳 undefined
const log1 = numbers.find((n)=> { return n > 5 })
console.log(log1) 

const result1 = words.filter(word => word.length > 6);
console.log(result1);


console.log("-------- findIndex() 取一個項目 ---------")
// ? 依據提供的測試函式，尋找陣列中符合的元素，並返回其 index（索引）沒有符合對象，將返回 -1 


console.log("-------- find() 取一個項目 ---------")
// ? 
