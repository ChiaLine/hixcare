// Method	用途 前後關聯計算  常見用於將陣列中所有數字累加起來
// Array.prototype.reduce()	 // ! 可放兩個參數 reduce(函式, 預設值) 
// ? 將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值
// 假如 initialValue 預設值 未被提供，reduce() 將會跳過第一個陣列索引，從陣列索引 1 開始執行
// 若有提供 initialValue 預設值，則會由陣列索引 0 開始執行
// ? 函式運算 可傳入4個參數(accumulator, currentValue, currentIndex, array)
// ? 每次計算的結果會再與下個元素作計算，直到結束為止 prev (前一個), next (後一個)
// 全局属性 Infinity 是一个数值，表示无穷大


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] // 合計 78
const numbers1 = [1, 2] // 合計 3
const numbers3 = [] // 合計 3

console.log("-------- reduce 累積加總 ---------")
const n = numbers.reduce(function (prev, next) {
  console.log('前一個', prev, '後一個', next)
  // console.log(prev + next)
  return prev + next
})
console.log("結果：", n)


console.log("-----取最大值  在沒傳入 initialValue 的情況下會有三種可能的輸出結果 ----")
var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
console.log([{ x: 22 }, { x: 42 }].reduce(maxCallback)) // 42
console.log([{ x: 22 }].reduce(maxCallback))  // { x: 22 }
// console.log([].reduce(maxCallback))  // TypeError
console.log([].reduce(maxCallback, 0))  // TypeError


console.log("-------- map + reduce 取最大值---------")
var maxCallback2 = (max, cur) => Math.max(max, cur)
console.log([{ x: 22 }, { x: 42 }].map(el => el.x).reduce(maxCallback2, -Infinity))
